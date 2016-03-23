var DEBUG, consoleLogger, ptTransport, ref, ref1, ref2, ref3, transports;

DEBUG = false;

consoleLogger = new Winston.transports.Console({
  level: 'debug',
  colorize: true,
  timestamp: function() {
    return (new Date).toString();
  },
  logFormat: function(level, message) {
    return '[' + level + '] ' + message;
  }
});

if ((((ref = Meteor.settings) != null ? (ref1 = ref.papertrail) != null ? ref1.host : void 0 : void 0) != null) && (((ref2 = Meteor.settings) != null ? (ref3 = ref2.papertrail) != null ? ref3.port : void 0 : void 0) != null)) {
  ptTransport = new Winston_Papertrail({
    host: Meteor.settings.papertrail.host,
    port: Meteor.settings.papertrail.port,
    level: 'debug',
    colorize: true,
    inlineMeta: true,
    logFormat: function(level, message) {
      return '[' + level + '] ' + message;
    }
  });
}

transports = [consoleLogger];

if (ptTransport != null) {
  transports.push(ptTransport);
}

App.Log = new Winston.Logger({
  levels: Winston.config.syslog.levels,
  transports: transports
});

App.Log.count = function(message, count) {
  return App.Log.log('info', message, {
    count: count
  });
};

App.Log.value = function(message, value) {
  return App.Log.log('info', message, {
    value: value
  });
};
