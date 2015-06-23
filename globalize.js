function globalize(name, thing) {
    if (!arguments.length) {
        var smallilies = require('./');
        for (key in smallilies)
            globalize(key, smallilies[key]);
        return;
    }
    if (name && name.length && (typeof thing != 'undefined'))
        GLOBAL[name] = thing;
}

module.exports = globalize;
