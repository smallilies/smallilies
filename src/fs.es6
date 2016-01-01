import fs from 'fs';
import Promise from 'bluebird';
// import promisifyAll from './promisify-all';

module.exports = Promise.promisifyAll(fs);
