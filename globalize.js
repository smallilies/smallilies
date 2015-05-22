function globalize(name, thing) {
    if (name && thing) {
        Object.defineProperty(global, name, {
            get: function() {
                return thing;
            },
            configurable: true,
        });
    } else {
        var smallilies = require('./');
        for (key in smallilies)
            globalize(key, smallilies[key]);
    }
}

module.exports = globalize;
