module.exports = {
  staticFileGlobs: [
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/images/**/*',
    '/stylesheets/*',
    '/docs/**/*'
  ],
  dynamicUrlToDependencies: {
    '/': ['index.html']
  }
};
