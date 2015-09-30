module.exports = defineProperty;

function defineProperty(object, name, getter, setter, configurable, enumerable) {
    var options = {
        get: () => this['__' + name],
        // set: (v) => this['__' + name] = v,
        configurable: true,
        enumerable: false,
    };
    if (getter instanceof Function) options.get = getter;
    if (setter instanceof Function) options.set = setter;
    if (setter instanceof Boolean) options.configurable = options.enumerable = setter;
    if (configurable instanceof Boolean) options.configurable = configurable;
    if (enumerable instanceof Boolean) options.enumerable = enumerable;
    Object.defineProperty(object, name, options);
    return object;
};
