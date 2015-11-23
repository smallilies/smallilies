var s = module.exports = {};

// Popular 3rd party
s.async       = require('async');
s.Promise     = require('bluebird');
s._           = require('lodash');
s.extend      = ::s._.extend;
s.merge       = ::s._.merge;
s.moment      = require('moment');
s.pluralize   = require('pluralize');
s.toTitleCase = require('titlecase');

// Custom
// s.join               = require('./array-join');
s.deepIndexOf        = require('./deep-index-of');
// s.matchIndexOf       = require('./match-index-of');
// s.setTimeoutDebounce = require('./set-timeout-debounce');
s.tostr              = require('./tostr');
// s.toShortString      = s.tostr; // bc
// s.shortenString      = s.tostr; // bc
// s.exists             = require('./exists');
s.defineProperty     = require('./define-property');
s.globalize          = require('./globalize');

s.noop    = function noOperation() {}
s.errnoop = function LogErrOrNoop(err) {if (err) console.error(err); }
s.nooperr = s.errnoop


// NodeJS Built-ins
try{
s.os        = require('os');
s.fs        = require('fs');
s.exec      = require('child_process').exec;
s.spawn     = require('child_process').spawn;
s.cluster   = require('cluster');
s.readline  = require('readline');
s.fs.mkdirp = require('mkdirp');
s.yargs     = require('yargs').argv;
s.nconf     = require('./nconf');
s.Promise.promisifyAll(s.fs);
s.defineProperty(s, 'tmpdir', s.os.tmpdir);
require('./cluster-is-master-restarting-worker');
s.fs.mkdirpSync = s.fs.mkdirp.sync.bind(s.fs.mkdirp);
}catch(err){}
// Webpack's node-libs-browser can take care
s.assert   = require('assert');
s.path     = require('path');
s.Path     = s.path;
s.util     = require('util');
s.URL      = require('url');
s.argv     = process.argv.slice(2);
s.defineProperty(s, 'cwd'   , process.cwd);

require('./async+promise');

s.globalize();