var defineProperty = require('./define-property');

function globalize(name, thing) {
    if (!arguments.length) {
        var smallilies = require('./');
        for (key in smallilies)
            globalize(key, smallilies[key]);
        return;
    }
    if (name && name.length && (typeof thing != 'undefined'))
        defineProperty(global, name, function() {
            return thing;
        });
}

module.exports = globalize;
