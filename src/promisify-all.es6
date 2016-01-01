import fs from 'fs';
import Promise from 'bluebird';
var Args = require('vargs').Constructor;

module.exports = promisifyAll;

function promisifyAll(obj) {
    return Promise.promisifyAll(obj, {
        promisifier
    });
}

function promisifier(fn) {
    return function promisified() {
        var args = new(Args)(arguments);
        var callback = args.callbackGiven() && args.callback;
        var rest = args.all;
        return new Promise(done =>
            fn.call(this, ...rest, (err, result) => {
                done(result || err);
                callback && callback(err, result);
                return result || err;
            }));
    };
}
