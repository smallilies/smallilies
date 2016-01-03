import {
    spawn, exec,
}
from './';

exports['child_process'] = {
    'spawn(node -v)': async(done) => {
        var cp = spawn('node -v');
        patchdone(cp, done);
    },
    'spawn(node, -v)': async(done) => {
        var cp = spawn('node', '-v')
        patchdone(cp, done);
    },
    'spawn(node, [-v])': async(done) => {
        var cp = spawn('node', ['-v'])
        patchdone(cp, done);
    },

    'spawn(node -v).then(ok)': async(done) => {
        spawn('node', ['-v'])
            .then(done)
            .catch(done);
    },
    'await spawn(node, [-v])': async() => {
        await spawn('node', ['-v'])
    },

    'exec(node -v)': async(done) => {
        exec('node -v', done);
    },
};

function patchdone(cp, done) {
    cp.on('exit', done)
    cp.on('error', done);
}
