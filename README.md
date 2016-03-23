logging
---

Load winston and winston-papertrail on the server, then expose the `log.it`
method to the client. Logs pushed from the client include the user's IP and
`userId`.

## Configuration

Out of the box, logs are sent to the console.

### Papertrail

To add papertrail support set `Meteor.settings.papertrail` like so:

```js
{
  host: '',
  port: '',
}
```

## API

### Methods

* `log.it`
  - `level` string - the log level, from winston syslog levels
  - `message` string - the message to log
  - `meta` object - any additional meta data to log (limited to 10 fields)

* `log.count`
  - `message` string - the message or name of the counter
  - `count` integer - a positive number

* `log.value`
  - `message` string - the message or name of the value
  - `value` float - the value to be logged

### Server

* `App.Log` - the winston instance
* `App.Log.log(level, message)`
* `App.Log.count(message, count)` - same as method
* `App.Log.value(message, value)` - same as method
