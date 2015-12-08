var nconf = require('nconf');

if (nconf.argv) {
    nconf.argv();
    nconf.env();
    nconf.file({
        file: './config.json'
    });
}

nconf._get = nconf.get;
nconf.get = function nconf_get_caseInsensitive_patch(name) {
    return nconf._get(name) || nconf._get(name.toLowerCase()) || nconf._get(name.toUpperCase());
};

module.exports = nconf;
