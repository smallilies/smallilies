var smallilies = module.exports = {};
smallilies.join = require('./array-join');
smallilies.deepIndexOf = require('./deep-index-of');
smallilies.shortenString = require('./shorten-string');
smallilies.toShortString = require('./shorten-string');
// smallilies.extend = smallilies.merge = require('./extend');
smallilies.extend = require('lodash').extend;
smallilies.merge = require('lodash').merge;
smallilies.exists = function exists(variable) {
    return (typeof variable != 'undefined');
}

smallilies.globalize = require('./globalize');

smallilies.fs = require('fs');
// smallilies.path = require('path');
smallilies.Path = require('path');
smallilies.util = require('util');
smallilies.URL = require('url');

smallilies.async = require('async');
smallilies.Promise = require('bluebird');
smallilies._ = require('lodash');
smallilies.moment = require('moment');
smallilies.slug = require('uslug');
