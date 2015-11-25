var CP = require('child_process');

exports.exec = (...args) => stdioPatched('exec', ...args);
exports.spawn = (...args) => stdioPatched('spawn', ...args);

function stdioPatched(fn, ...args) {
    var cp = CP[fn](...args);
    cp.stdout.pipe(process.stdout);
    cp.stderr.pipe(process.stderr);
    return cp;
}
