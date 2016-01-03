import Notifier from 'node-notifier';
import _ from 'lodash';
import argue from '../argue';

module.exports = notify;

function notify() {
    var sig = argue(arguments);
    var title = sig.get('s');
    if (!title) title = 'Node';
    var message = sig.getAll('s');
    if (!message.length) message = ['notification!'];
    message = message.join(' ');

    var opts = sig.get('o') || {};
    opts = _.extend({
        sound: true,
        // time: Infinity,
        title,
        message,
    }, opts);

    var callback = sig.get('f');

    return new Promise(function(done) {
        Notifier.notify(opts, function() {
            done(this);
            if (callback) callback.apply(this, arguments);
        });
    });
}
