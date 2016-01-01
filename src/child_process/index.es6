import CP     from 'child_process';
import cspawn from 'cross-spawn-async';
import kill   from 'tree-kill';
import _      from 'lodash';
import argue  from '../argue';

export const spawn = function spawn_pipeKillArgsPatched(command, args, options) {
    var sig     = argue(arguments);
    var command = sig.getAll('s').join(' ');
    var args    = _.flatten(sig.getAll('a'));
    var options = sig.get('o') || {};

    [command, args] = patchCommandArgs(command, args);

    var cp = cspawn(command, args, options);

    options.stdio || pipeStd(cp)
    patchKill(cp)
    return cp;
}

export const exec = function exec_pipeKillArgsPatched(command, options, callback) {
    var sig      = argue(arguments);
    var command  = sig.getAll('s').join(' ');
    var options  = sig.get('o') || {};
    var callback = sig.get('f');

    var cp = CP.exec(command, options, callback);

    options.stdio || pipeStd(cp)
    patchKill(cp)
    return cp;
}


function pipeStd(cp) {
    cp.stdout.pipe(process.stdout);
    cp.stderr.pipe(process.stderr);
    return cp;
}

function patchKill(cp) {
    cp.kill = function() {
        kill(this.pid);
    };
    return cp;
}

function patchCommandArgs(command, args) {
    var c = command.split(/ /g);
    command = c.shift();
    args = c.concat(args);
    return [command, args];
}
