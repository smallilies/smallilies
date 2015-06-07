function defineProperty(object, name, getter, setter) {
    Object.defineProperty(object, name, {
        get: getter,
        set: setter,
        configurable: true,
        enumerable: true,
    });
};

module.exports = defineProperty;
