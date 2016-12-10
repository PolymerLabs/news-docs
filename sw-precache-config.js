module.exports = {
  staticFileGlobs: [
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/images/**/*',
    '/stylesheets/*',
    '/extend.html',
    '/get-started.html'
  ],
  dynamicUrlToDependencies: {
    '/': ['index.html']
  }
};
