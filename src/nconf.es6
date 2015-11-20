var nconf = require('nconf').argv().env().file({
    file: './config.json'
});

nconf._get = nconf.get;
nconf.get = function nconf_get_caseInsensitive_patch(name){
    return nconf._get(name) || nconf._get(name.toLowerCase()) || nconf._get(name.toUpperCase());
};

module.exports = nconf;