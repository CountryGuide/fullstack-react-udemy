if (process.env.NODE_ENV === 'production') {
    console.log('test');
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
