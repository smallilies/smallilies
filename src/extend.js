module.exports = extend;

// var defaults = {
//     deep: false,
//     replace: false,
//     clone: false,
// };

function isOptions(options) {
    if (typeof options == 'boolean') return true;
    if (typeof options.deep == 'boolean') return true;
    if (typeof options.replace == 'boolean') return true;
    if (typeof options.clone == 'boolean') return true;
}

function extend(options, dest, src1, src2 /*...*/ ) {
    var args = [].slice.call(arguments);

    if (!isOptions(options)) args.unshift(options = {});

    var dest = args[1] || {};
    var srcs = args.slice(2);

    srcs.forEach(function copy(src, i) {
        try {
            for (key in src)/*(function(key, value, src)*/ {
                try {
                    if (!dest[key]){
                        // console.log(1);
                        dest[key] = src[key];
                    }
                    else if (typeof src[key] == 'object' && typeof dest[key] == 'object'){
                        try{
                        console.log('\n==', 2, key, '\noptions', options, '\nsrc', src[key], '\ndest', dest[key]);
                        }catch(err){console.error(err);}
                        extend(options, dest[key], src[key]);
                    }
                    else if (options.replace){
                        console.log(3);
                        dest[key] = src[key];
                    }
                    // console.log('dest[' + key + ']', dest[key]);
                } catch (err) {
                    err.message = 'Error in src' + i + '[' + key + ']:"' + src[key] + '". ' + err.message;
                    console.error(err);
                };
            }/*)(key, src[key], src)*/;
        } catch (err) {
            err.message = 'Error in src' + i + '. ' + err.message;
            console.error(err);
        };
    });
    // console.log('dest:', dest);
    return dest;
};
