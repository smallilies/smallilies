import Notifier from 'node-notifier';
import _        from 'lodash';

module.exports = notify;

function notify(opts, ...rest) {
    if (typeof opts == 'string') opts = {
        message: opts
    };
    if (typeof rest[0] == 'string') opts = {
        title: opts.message,
        message: rest.shift(),
    };
    opts = _.extend({
        sound: true,
        // time: Infinity,
    }, opts);
    return Notifier.notify(opts, ...rest);
}
