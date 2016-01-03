import nconf from 'nconf';
import _ from 'lodash';

if (nconf.argv) {
    nconf.argv();
    nconf.env();
    nconf.file({
        file: './config.json'
    });
}

nconf._get = nconf.get;
nconf.get = function nconf_get_caseInsensitive_patch(name) {
    return nconf._get(name) ||
        nconf._get(name.toLowerCase()) ||
        nconf._get(name.toUpperCase()) ||
        nconf._get(_.camelCase(name)) ||
        nconf._get(_.kebabCase(name)) ||
        nconf._get(_.snakeCase(name)) ||
        undefined;
};

module.exports = nconf;
