'use strict';

var co = require('co');
var credential = require('./');

co(function* () {
  var hash = yield* credential.hash('foo');
  console.log(hash);

  var valid = yield* credential.verify(hash, 'foo');

  if (valid) {
    console.log('ok! \\o/');
  } else {
    console.log('not ok! :(');
  }
});
