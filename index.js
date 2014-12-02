'use strict';

var credential = require('credential');

exports.hash = function* hash(pass) {
  return yield function thunk(cb) {
    credential.hash(pass, cb);
  };
};

exports.verify = function* verify(hash, input) {
  return yield function thunk(cb) {
    credential.verify(hash, input, cb);
  };
};

exports.configure = credential.configure.bind(credential);
