var cluster = require('cluster');

function isMasterRestartingWorker(forks) {
    if (cluster.isMaster) {
        cluster.on('exit', function(worker, code, signal) {
            console.log('Process %d died (%s). restarting...', worker.process.pid, signal || code);
            cluster.fork();
        });
        if (isNaN(forks) || !forks) forks = 1;
        for (var i = 1; i <= forks; i++) cluster.fork();
        return true;
    } else return false;
};
module.exports = isMasterRestartingWorker;

var defineProperty = require('./define-property');
defineProperty(cluster, 'isMasterRestartingWorker', isMasterRestartingWorker);
cluster.isMaster$ = isMasterRestartingWorker;
