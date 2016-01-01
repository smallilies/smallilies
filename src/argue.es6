import argue from 'argue';

module.exports = argue_patch;

function argue_patch(args) {
    return new Signature(args, argue(args));
}


class Signature {
    constructor(args, sig) {
        this.args = Array.from(args);
        this.sig = sig;
    }
    get(s) {
        var i = this.sig.indexOf(s);
        if (i == -1) return;
        this.sig = this.sig.slice(0, i) + this.sig.slice(i + 1);
        return this.args.splice(i, 1)[0];
    }
    getAll(s) {
        var arg, args = [];
        while (arg = this.get(s))
            args.push(arg);
        return args;
    }
}
