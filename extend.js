module.exports = extend;

// var defaults = {
//     deep: false,
//     replace: false,
//     clone: false,
// };

function extend(options, dest, src1, src2 /*...*/ ) {
    var args = [].slice.call(arguments);

    if (typeof options == 'boolean')
        options = {
            deep: options
        };
    else if (options && (
            (options.deep && typeof options.deep == 'boolean') ||
            (options.replace && typeof options.replace == 'boolean')
        ))
        options = options;
    else
        args.unshift(options = {});


    // If no src(s), return dest as is
    if (args.length < 3) return dest;

    var dest = options.clone ? JSON.parse(JSON.stringify(args[1])) : args[1];
    if (!dest) dest = {};

    var srcs = args.slice(2);

    // console.log('options:', options);
    // console.log('dest:', dest);
    // console.log('srcs:', srcs);

    srcs.forEach(function copy(src, i) {
        try {
            for (key in src)(function forOfKeys(key, value, src) {
                try {
                    if (!dest[key])
                        dest[key] = src[key];
                    else if (typeof src[key] == 'object' && typeof dest[key] == 'object')
                        extend(options, dest[key], src[key]);
                    else if (options.replace)
                        dest[key] = src[key];
                    // console.log('dest[' + key + ']', dest[key]);
                } catch (err) {
                    err.message = 'Error in src' + i + '[' + key + ']:"' + value + '". ' + err.message;
                    console.error(err);
                };
            })(key, src[key], src);
        } catch (err) {
            err.message = 'Error in src' + i + '. ' + err.message;
            console.error(err);
        };
    });
    // console.log('dest:', dest);
    return dest;
};
