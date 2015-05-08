var elipsesChar = '…';

function shortenString(string, startingEnd, endingStart) {
    if (!string)
        return '';
    if (string instanceof Error)
        string = string.message;
    else if (Object.prototype.toString.call(string) == '[object Function]')
        string = string.toString();
    else if (typeof(string) != 'string') {
        string = JSON.parse(JSON.stringify(string));
        if (string.id || string._id || string.username || string.name || string.displayName || (string.emails && string.emails[0]) || (typeof(string.logged_in) != 'undefined')) {
            var user = string;
            var userString = '';
            if ((typeof(user.logged_in) != 'undefined') && !user.logged_in)
                user = userString = 'Anon';
            else {
                if (user.username || user.name || user.displayName || (user.emails && user.emails[0]))
                    userString += '[' + shortenString(user.username || user.name || user.displayName || (user.emails && user.emails[0])) + ']';
                if (user.id || user._id)
                    userString += '(' + shortenString(user.id || user._id) + ')';
                user = userString;
            }
            return user;
        } else
            string = JSON.stringify(string);
    }

    // string = string.replace(/\n/g, ' ');
    // string = string.replace(/\r/g, ' ');
    // string = string.replace(/\s{1,}/g, ' ');
    string = string.replace(/[\n\r\s]+/g, ' ');

    startingEnd = parseInt(startingEnd || 10);

    if (!endingStart || (endingStart < 1 && endingStart > 0)) {
        var totalLength = startingEnd;
        var startingFraction = endingStart || (2 / 3);
        startingEnd = parseInt(totalLength * startingFraction);
        endingStart = parseInt(totalLength * (1 - startingFraction));
    }

    endingStart = parseInt(endingStart || 5);
    if (endingStart == 1) {
        startingEnd -= 1;
        endingStart = 0;
    }

    if (string.slice(-1) == '"')
        string = string.slice(0, -1);
    if (string.slice(-1) == "'")
        string = string.slice(0, -1);
    if (string.substr(0, 1) == '"')
        string = string.substr(1);
    if (string.substr(0, 1) == "'")
        string = string.substr(1);

    if (string.substr(0, 8) == 'https://')
        string = string.substr(8);
    if (string.substr(0, 7) == 'http://')
        string = string.substr(7);
    if (string.substr(0, 4) == 'www.')
        string = string.substr(4);

    if (string.slice(-1) == '/')
        string = string.slice(0, -1);

    if (string.length <= (startingEnd + endingStart))
        return string;

    return string.substr(0, startingEnd) + elipsesChar + string.substr(string.length - endingStart);
}

if (typeof(angular) != 'undefined' && angular.module)
    angular.module('shortenString', []).filter('shortenString', function() {
        return shortenString;
    });
if (typeof(module) != 'undefined' && module.exports)
    module.exports = shortenString;
