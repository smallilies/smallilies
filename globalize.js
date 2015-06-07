var defineProperty = require('./define-property');

function globalize(name, thing) {
    if (name && thing) {
        defineProperty(global, name, function() {
            return thing;
        });
    } else {
        var smallilies = require('./');
        for (key in smallilies)
            globalize(key, smallilies[key]);
    }
}

module.exports = globalize;
