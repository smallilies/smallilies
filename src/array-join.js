/*
    Adds a smart "last separator" argument to array.join
    [1,2,3].join(', ', ', and') //=> 1, 2, and 3
*/

function join(arr, sep, lastsep) {
    if (!(arr instanceof Array)) return (arr.join && arr.join(sep));
    lastsep = lastsep || sep;
    if (arr.length <= 1)
        return arr.join(sep);
    arr = arr.slice();
    var last = arr.pop();
    var str = arr.join(sep);
    str += lastsep + last;
    return str;
};
module.exports = join;

// console.debug([].join(', ', ', and '));      // =>
// console.debug([1].join(', ', ', and '));     // => 1
// console.debug([1,2].join(', ', ', and '));   // => 1, and 2
// console.debug([1,2,3].join(', ', ', and ')); // => 1, 2, and 3
