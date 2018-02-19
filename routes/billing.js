const stripeKey = require('../config/keys').stripeSecretKey;
const stripe = require('stripe')(stripeKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        await stripe.charges.create({
            amount: 1000,
            currency: 'usd',
            description: 'jghjfhjgfd',
            source: req.body.id
        });

        req.user.credits += 10;
        const user = await req.user.save();

        res.send(user);
    });
};
