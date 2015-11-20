var s = module.exports = {};
// NodeJS Built-ins
s.os       = require('os');
s.fs       = require('fs');
s.exec     = require('child_process').exec;
s.spawn    = require('child_process').spawn;
s.assert   = require('assert');
s.path     = require('path');
s.Path     = s.path;
s.util     = require('util');
s.URL      = require('url');
s.argv     = process.argv.slice(2);
s.cluster  = require('cluster');
require('./cluster-is-master-restarting-worker');
s.readline = require('readline');

// Popular
s.async       = require('async');
s.Promise     = require('bluebird');
s._           = require('lodash');
s.extend      = ::s._.extend;
s.merge       = ::s._.merge;
s.moment      = require('moment');
s.pluralize   = require('pluralize');
s.slug        = require('uslug');
s.yargs       = require('yargs').argv;
s.toTitleCase = require('titlecase');
s.nconf       = require('./nconf');


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
s.errnoop = function LogErrOrNoop(err) {if (err) console.error(err); }
s.nooperr = s.errnoop

s.Promise.promisifyAll(s.fs);

s.defineProperty(s, 'cwd'   , process.cwd);
s.defineProperty(s, 'tmpdir', s.os.tmpdir);

require('./async+promise');

s.globalize();