module.exports = {
  staticFileGlobs: [
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/images/*'
  ],
  dynamicUrlToDependencies: {
    '/': ['index.html']
  },
  navigateFallback: '/',
  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/]
};
