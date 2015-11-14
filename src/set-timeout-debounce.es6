function setTimeoutDebounce(callback, interval) {
    if (typeof interval == 'function' && typeof callback == 'number') {
        var fn = interval;
        interval = callback;
        callback = fn;
    }
    if (!interval) interval = 0;
    var name = '__setTimeoutDebounce';
    clearTimeout(callback[name]);
    callback[name] = setTimeout.apply(this, arguments);
    return callback[name];
};
module.exports = setTimeoutDebounce;
