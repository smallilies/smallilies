function globalize(name, thing) {
    Object.defineProperty(global, name, {
        get: function() {
            return thing;
        },
        configurable: true,
    });
}

globalize.globalize = function globalize_globalize() {
    globalize('globalize', globalize);
}

module.exports = globalize;
