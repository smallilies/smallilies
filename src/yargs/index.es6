import yargs from 'yargs';

module.exports = yargs
    .count('verbose')
    .alias('v', 'verbose')
    .argv;
