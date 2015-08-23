var smallilies         = module.exports                = {};

var join               = smallilies.join               = require('./array-join');
var deepIndexOf        = smallilies.deepIndexOf        = require('./deep-index-of');
var matchIndexOf       = smallilies.matchIndexOf       = require('./match-index-of');
var setTimeoutDebounce = smallilies.setTimeoutDebounce = require('./set-timeout-debounce');
var shortenString      = smallilies.shortenString      = require('./shorten-string');
var toShortString      = smallilies.toShortString      = require('./shorten-string');
var exists             = smallilies.exists             = require('./exists');
var defineProperty     = smallilies.defineProperty     = require('./define-property');
var globalize          = smallilies.globalize          = require('./globalize');

var extend             = smallilies.extend             = require('lodash').extend;
var merge              = smallilies.merge              = require('lodash').merge;


var os                 = smallilies.os                 = require('os');
var fs                 = smallilies.fs                 = require('fs');
var exec               = smallilies.exec               = require('child_process').exec;
var cluster            = smallilies.cluster            = require('cluster');
var assert             = smallilies.assert             = require('assert');
var path               = smallilies.path               = require('path');
var Path               = smallilies.Path               = require('path');
var util               = smallilies.util               = require('util');
var URL                = smallilies.URL                = require('url');
var argv               = smallilies.argv               = process.argv.slice(2);
require('./cluster-is-master-restarting-worker');

var readline           = smallilies.readline           = require('readline').createInterface({input: process.stdin, output: process.stdout });
var rl                 = smallilies.rl                 = readline;

smallilies.defineProperty(smallilies, 'cwd', process.cwd);
smallilies.defineProperty(smallilies, 'tmpdir', os.tmpdir);

var async              = smallilies.async              = require('async');
var Promise            = smallilies.Promise            = require('bluebird');

var _                  = smallilies._                  = require('lodash');

var moment             = smallilies.moment             = require('moment');

var slug               = smallilies.slug               = require('uslug');

var yargs              = smallilies.yargs              = require('yargs').argv;

var toTitleCase        = smallilies.toTitleCase        = require('titlecase');

var noop               = smallilies.noop               = function noOperation(){}
var nooperr            = smallilies.nooperr            = function noOpConErr(err){if(err)console.error(err);}

smallilies.Promise.promisifyAll(fs);
