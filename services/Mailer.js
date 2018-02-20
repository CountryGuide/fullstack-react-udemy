const sendGrid    = require('sendgrid');
const sendGridKey = require('../config/keys').sendGridKey;
const helper      = sendGrid.mail;


module.exports = class Mailer extends helper.Mail {
    constructor({subject, recipients}, content) {
        super();

        this.sgApi      = sendGrid(sendGridKey);
        this.from_email = new helper.Email('no-reply@acousticapp.com');
        this.subject    = subject;
        this.body       = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.setFrom(this.from_email);
        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(emails) {
        return emails.map(({email}) => new helper.Email(email));
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking    = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();

        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    async send() {
        const request = this.sgApi.emptyRequest({
            method: "POST",
            path: "/v3/mail/send",
            body: this.toJSON()
        });

        return await this.sgApi.API(request);
    }
};
