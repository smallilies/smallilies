var smallilies = module.exports = {};
var join = smallilies.join = require('./array-join');
var deepIndexOf = smallilies.deepIndexOf = require('./deep-index-of');
var shortenString = smallilies.shortenString = require('./shorten-string');
var extend = smallilies.extend = require('./extend');
var globalize = smallilies.globalize = require('./globalize');

globalize.smallilies = function globalize_smallilies() {
    for (key in smallilies)
        globalize(key, smallilies[key]);
}

// (function smallilies_test() {(function() {var a1 = {a1: 'a1', a2: 'a1', b1: {b1: 'b1', }, }; console.log('a1:', a1); var a2 = {a2: 'a2', b1: {b2: 'b2', b2r: 'b2r', }, }; var c1 = extend(true, a1, a2); console.log('a1:', a1); console.log('a2:', a2); console.log('c1:', c1); })(); })();
// (function smallilies_test() {
//     (function() {
//         var a1;
//         var a2 = {a2: 'a2', b1: {b2: 'b2', b2r: 'b2r', }, };
//         var c1 = extend(true, a1, a2);
//         console.log('c1:', c1);
//         // console.log('a2:', a2);
//         // console.log('c1:', c1);
//     })();
// })();
