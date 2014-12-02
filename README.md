# co-credential

[co](https://npmjs.org/package/co) wrapper for the [credential](https://npmjs.org/package/credential) module.

## Install

Install the [package](https://npmjs.org/package/co-credential) with [npm](https://npmjs.org):

```sh
$ npm install co-credential
```

## Usage

### Example

```js
var credential = require('credential');
var hash = credential.hash;
var verify = credential.verify;

var h = yield* hash('my very secret password');

//...

var valid = yield* verify(h, 'my very secret password');

if (valid) {
  console.log('ok!');
}
```

### API

#### `.hash(pass)`

Creates a unique hash, based on `pass`.

#### `.verify(hash, input)`

Verifies `input` against `hash`.

#### `.configure(opts)`

See the [original](https://github.com/ericelliott/credential#configureoptions)

## License

MIT
