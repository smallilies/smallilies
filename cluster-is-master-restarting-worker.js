var cluster = require('cluster');

function isMasterRestartingWorker() {
    if (cluster.isMaster) {
        cluster.on('exit', function(worker, code, signal) {
            console.log('Process %d died (%s). restarting...',
                worker.process.pid, signal || code);
            cluster.fork();
        });
        cluster.fork();
        return true;
    } else return false;
};
module.exports = isMasterRestartingWorker;

var defineProperty = require('./define-property');
defineProperty(cluster, 'isMasterRestartingWorker', isMasterRestartingWorker);
