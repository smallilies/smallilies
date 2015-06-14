function matchIndexOf(array, value) {
    for (var i = array.length - 1; i >= 0; i--)
        if (array[i].match(value)) return i;
};
module.exports = matchIndexOf;
