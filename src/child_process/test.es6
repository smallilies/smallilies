import {
    spawn, exec,
}
from './';

exports['child_process'] = {
    'spawn(node -v)': async(done) => {
        var cp = spawn('node -v');
        tspawn(cp, done);
    },
    'spawn(node, -v)': async(done) => {
        var cp = spawn('node', '-v')
        tspawn(cp, done);
    },
    'spawn(node, [-v])': async(done) => {
        var cp = spawn('node', ['-v'])
        tspawn(cp, done);
    },

    'exec(node -v)': async(done) => {
        exec('node -v', done);
    },
};

function tspawn(cp, done) {
    cp.on('exit', done)
    cp.on('error', done);
}
