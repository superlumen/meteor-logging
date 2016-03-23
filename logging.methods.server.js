let DEBUG = false;

Meteor.methods({
  'log.it': function(level, message, meta) {
    var _client, ref4;
    if (meta == null) {
      meta = {};
    }
    DEBUG && console.log('#qTkNys log.it', level, message, meta);
    if ((meta != null) && _.keys(meta).length > 10) {
      throw new Meteor.Error('forbidden', '#ptzGS9 Too many keys.');
    }
    check(level, Match.OneOf.apply({}, _.keys(Winston.config.syslog.levels)));
    check(message, String);
    check(meta, Object);
    this.unblock();
    _client = {
      userIP: (ref4 = this.connection) != null ? ref4.clientAddress : void 0,
      userId: this.userId
    };
    _.extend(meta, {
      _client: _client
    });
    DEBUG && console.log('meta:', meta);
    return App.Log.log(level, message, meta);
  },
  'log.count': function(message, count) {
    check(message, String);
    check(count, Match.Integer);
    return App.Log.count(message, count);
  },
  'log.value': function(message, value) {
    check(message, String);
    check(value, Number);
    return App.Log.value(message, value);
  }
});
