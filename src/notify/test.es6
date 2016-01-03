import notify from './';

module.exports = {
    'notify()': async() => await notify(),
    'notify(test-message)': async() => await notify('test-message'),
    'notify(Title, test-message)': async() => await notify('Title', 'test-message'),
}
