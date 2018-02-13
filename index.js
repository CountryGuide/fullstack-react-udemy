const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const clientID = '823166575512-gt41naa8gtts846o081i6agh41s2lt1j.apps.googleusercontent.com';
const clientSecret = 'Rb5mpJC8s4Vq0KuJWAplfgRc';

const app = express();
const PORT = process.env.PORT || 3001;

passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
    res.send({ message: 'test' });
});

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});
