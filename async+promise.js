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
    var errs = [];
    return recurse();
    function recurse(err) {
        if (err) errs.push(err);
        if (i > limit) return errs;
        return arr[i++]().catch(recurse);
    }
};
