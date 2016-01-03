import 'smallilies';
process.title = cwd.split(/[\/\\]+/g).slice(2).reverse().join(' ') + ' - Test';
import 'babel-polyfill';
import 'source-map-support/register';

import 'mocha-clean';
import Mocha from 'mocha';

var mocha = new Mocha({
    ui: 'exports',
    // reporter: 'mocha-clean'
    timeout: '10s',
    grep: argv.join(' '),
});

mocha.addFile(Path.join(__dirname, './child_process/test'));
mocha.addFile(Path.join(__dirname, './notify/test'));

mocha.run(::process.exit);
