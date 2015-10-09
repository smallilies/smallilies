'use strict';

var async = require('./').async;
var Promise = require('./').Promise;

Promise.some1 = function some_concurrency_1(arr) {
    return Promise.some(arr, 1, {
        concurrency: 1
    });
};

Promise.series = function series(arr) {
    var i = 0;
    var limit = arr.length - 1;
    var res = [];
    return recurse();

    function recurse() {
        if (i > limit) return Promise.resolve(res);
        return arr[i++]()
            .then(r => res.push(r))
            .catch(e => res.push(e))
            .then(recurse);
    }
};

Promise.series1 = function series1(arr) {
    var i = 0;
    var limit = arr.length - 1;
    var errs = [];
    return recurse();

    function recurse(err) {
        if (err) errs.push(err);
        if (i > limit) throw errs;
        return arr[i++]().catch(recurse);
    }
};
