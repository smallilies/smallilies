(function() {
    // Array.prototype.deepIndexOf = function(input) {
    //     return deepIndexOf(this, input);
    // }

    // String.prototype.deepIndexOf = function(input) {
    //     return deepIndexOf(this.toString(), input);
    // }

    function deepIndexOf(array1, array2) {
        // console.log('array1:', array1);
        // console.log('array2:', array2);
        // return -1;
        if (!array1[0] || !array2[0])
            return -1;
        if (array1[0].length <= 1)
            array1 = [array1];
        // else console.log(array1, 'is not a string', typeof(array1));
        if (array2[0].length <= 1)
            array2 = [array2];
        // else console.log(array2, 'is not a string', typeof(array2));
        for (var i = 0; i < array1.length; i++) {
            // console.log('Finding in', array1[i]);
            for (var j = 0; j < array2.length; j++) {
                // console.log(' ', array2[j]);
                if (array2[j].indexOf(array1[i]) !== -1)
                    return j;
                // console.log('Finding', array2[j], 'in', array1[i]);
                if (array1[i].indexOf(array2[j]) !== -1)
                    return i;
            }
        }
        return -1;
    }

    // Array.prototype.replaceAll = function() {
    //     for (var j = 0; j < this.length; j++) {
    //         if (typeof(this[j]) == 'string')
    //             this[j] = this[j].replace.apply(this[j], arguments);
    //         else if (this[j] instanceof Array)
    //             this[j].replaceAll.apply(this[j], arguments);
    //     }
    //     return this;
    // }

    if (typeof(angular) != 'undefined' && angular.module)
        angular.module('deepIndexOf', []).filter('deepIndexOf', function() {
            return deepIndexOf;
        });
    if (typeof(module) != 'undefined' && module.exports)
        module.exports = deepIndexOf;

})();


// function deepIndexOf(array1, array2) {
//     if (array1 && !(array1 instanceof Array)) array1 = [array1];
//     if (array2 && !(array2 instanceof Array)) array2 = [array2];
//     for (let i = 0, il = array1.length, el1; i < il && (el1 = array1[i]); i++)
//         for (let j = 0, jl = array2.length, el2; j < jl && (el2 = array2[j]); j++)
//             if (el1.match(el2) || el2.match(el1))
//                 return parseInt(i + '' + j);
//             // {
//             //     let el1matchel2 = el1.match(el2);
//             //     if(el1matchel2) {
//             //         // Console.log(el1, 'contains', el2);
//             //         // Console.log(el1matchel2);
//             //         return parseInt(i + '' + j);
//             //     }
//             //     let el2matchel1 = el2.match(el1);
//             //     if(el2matchel1) {
//             //         // Console.log(el2, 'contains', el1);
//             //         // Console.log(el2matchel1);
//             //         return parseInt(i + '' + j);
//             //     }
//             //     // if (el1.match(el2) || el2.match(el1)) {
//             //     //     return parseInt(i + '' + j);
//             //     // }
//             // }
//     return -1;
// }
