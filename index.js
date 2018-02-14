const express       = require('express');
const mongoose      = require('mongoose');
const cookieSession = require('cookie-session');
const passport      = require('passport');
const keys          = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => console.log(err));

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(
    cookieSession({
        maxAge: 30 * 24 * 3600 * 1000,
        keys:   [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});
