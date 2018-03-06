import React from 'react';
import SurveyForm from "./SurveyForm";
import { SurveyFormReview } from "./SurveyFormReview";
import { reduxForm } from "redux-form";
import { Helmet } from "react-helmet";


class SurveyNew extends React.Component {
    // Это типа такой хитрый вызов конструктора... Хм...
    state = { showReview: false };

    renderContent () {
        if (this.state.showReview) {
            return <SurveyFormReview onCancel={() => this.setState({ showReview: false })}/>;
        }

        return <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })}/>
    }

    render () {
        return (
            <div>
                <Helmet>
                    <title>AR: New survey</title>
                </Helmet>
                <h2 className="uk-text-uppercase uk-heading-divider uk-padding uk-padding-remove-horizontal">
                    New survey
                </h2>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
