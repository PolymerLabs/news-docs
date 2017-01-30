/*
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

'use strict';

let gulp = require('gulp-help')(require('gulp'));
let $ = require('gulp-load-plugins')();
let matter = require('gulp-gray-matter');

let fs = require('fs');
let markdownIt = require('markdown-it')({
    html: true,
    highlight: (code, lang) => {
      let highlightjs = require('highlight.js')
      if (lang && highlightjs.getLanguage(lang)) {
        try {
          return highlightjs.highlight(lang, code).value;
        } catch (__) { console.log(__) }
      } else {
        try {
          return highlightjs.highlightAuto(code).value;
        } catch (__) { console.log(__) }
      }

      return ''; // use external default escaping
    }
  });
let markdownItAttrs = require('markdown-it-attrs');
let merge = require('merge-stream');
let path = require('path');
let runSequence = require('run-sequence');
let toc = require('toc');

markdownIt.use(markdownItAttrs);
// keep markdownIt from escaping template markup.
markdownIt.normalizeLink = function(link) { return link; }
markdownIt.validateLink = function(link) { return true; }

function convertMarkdownToHtml(file, templateName) {
  let data = file.data;
  data.file = file;
  data.content = markdownIt.render(file.content); // Markdown -> HTML.
  data.title = data.title || '';
  data.subtitle = data.subtitle || '';

  data.content = toc.process(data.content, {
    header: '<h<%= level %><%= attrs %> id="<%= anchor %>" class="has-permalink"><%= header %></h<%= level %>>',
    TOC: '<nav><%= toc %></nav><article>',
    openUL: '<ul data-depth="<%= depth %>">',
    closeUL: '</ul>',
    openLI: '<li data-level="H<%= level %>"><a href="#<%= anchor %>"><%= text %></a>',
    closeLI: '</li>',
    tocMax: 2,
    anchor: function(header, attrs) {
      // if we have an ID attribute, use that, otherwise
      // use the default slug
      var id = attrs.match(/(?:^|\s+)id="([^"]*)"/)
      return id ? id[1] : toc.anchor(header);
    }
  }) + '</article>';

  $.util.replaceExtension(file, '.html'); // file.md -> file.html
  let tmpl = fs.readFileSync(templateName);
  let renderTemplate = $.util.template(tmpl);

  return renderTemplate(data);
}

gulp.task('default', 'guide markdown -> HTML conversion. Syntax highlight and TOC generation', function() {
  return gulp.src([
      'docs/*.md',
    ], {base: 'docs/'})
    .pipe(matter(function(file) { // pull out front matter data.
      return convertMarkdownToHtml(file, 'templates/guide.html');
    }))
    .pipe($.rename({extname: '.html'}))
    .pipe(gulp.dest('docs'));
});
