var s = module.exports = {};

// NodeJS Built-ins
s.os      = require('os');
s.fs      = require('fs');
s.exec    = require('child_process').exec;
s.assert  = require('assert');
s.path    = require('path');
s.Path    = s.path;
s.util    = require('util');
s.URL     = require('url');
s.argv    = process.argv.slice(2);
s.rl      = require('readline').createInterface({input: process.stdin, output: process.stdout });
s.cluster = require('cluster');
require('./cluster-is-master-restarting-worker');
s.Promise.promisifyAll(s.fs);
s.defineProperty(s, 'cwd'   , process.cwd);
s.defineProperty(s, 'tmpdir', s.os.tmpdir);

// Popular
s.async       = require('async');
s.Promise     = require('bluebird');
s._           = require('lodash');
s.extend      = require('lodash').extend;
s.merge       = require('lodash').merge;
s.moment      = require('moment');
s.slug        = require('uslug');
s.yargs       = require('yargs').argv;
s.toTitleCase = require('titlecase');

s.fs.mkdirp     = require('mkdirp');
s.fs.mkdirpSync = s.fs.mkdirp.sync.bind(s.fs.mkdirp);

// Custom
s.join               = require('./array-join');
s.deepIndexOf        = require('./deep-index-of');
s.matchIndexOf       = require('./match-index-of');
s.setTimeoutDebounce = require('./set-timeout-debounce');
s.tostr              = require('./tostr');
s.toShortString      = s.tostr; // bc
s.shortenString      = s.tostr; // bc
s.exists             = require('./exists');
s.defineProperty     = require('./define-property');
s.globalize          = require('./globalize');

s.noop    = function noOperation() {}
s.nooperr = function noOpConErr(err) {if (err) console.error(err); }

