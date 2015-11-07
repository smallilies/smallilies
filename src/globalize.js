var defineProperty = require('./define-property');

function globalize(name, thing) {
    if (!arguments.length) {
        var smallilies = require('./');
        for (let key in smallilies)
            globalize(key, smallilies[key]);
        return;
    }
    if (name && name.length && (typeof thing != 'undefined'))
        defineProperty(global, name, () => thing);
}

module.exports = globalize;