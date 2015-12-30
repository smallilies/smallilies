import Notifier from 'node-notifier';
import _ from 'lodash';
import argue from 'argue';

module.exports = notify;

function notify() {
    var sig = argue(arguments);
    var title, message = '';
    for (let i in sig) {
        let c = sig[i];
        let arg = arguments[i];
        if (c == 's')
            if (!title) title = arg;
            else message += ' ' + arg
    }
    if (!title) title = 'Node';
    if (!message.length) message = 'notification!';
    var opts = arguments[sig.indexOf('o')] || {};
    opts = _.extend({
        sound: true,
        // time: Infinity,
        title,
        message,
    }, opts);
    var callback = arguments[sig.indexOf('f')]
    return Notifier.notify(opts, callback);
}
