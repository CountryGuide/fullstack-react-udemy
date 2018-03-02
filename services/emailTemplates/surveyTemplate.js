const pug = require('pug');
const path = require('path');
const redirectUrl = require('../../config/keys').redirectDomain;

module.exports = (survey) => {
    const compiled = pug.compileFile(path.resolve(__dirname, 'email.pug'), {});
    return compiled({ survey, redirectUrl });
};
