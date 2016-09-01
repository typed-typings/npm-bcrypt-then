/// <reference path="bundle.d.ts" />

import assert = require('assert');
import bcrypt = require('bcrypt-then');

bcrypt.hash('test')
  .then(hash => assert.equal(typeof hash, 'string'))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
