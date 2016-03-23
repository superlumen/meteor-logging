Package.describe({
  name: 'superlumen:logging',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'check',
    'underscore',
    'ecmascript',
  ]);
  api.use([
    'superlumen:base@0.0.6', // We need the `App` namespace
    'superlumen:meteor-winston@0.0.1',
    'superlumen:meteor-winston-papertrail@0.0.1'
    ], 'server');
  api.addFiles('logging.api.server.js', 'server');
  api.addFiles('logging.methods.server.js', 'server');
});
