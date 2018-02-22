import React from 'react';
import SurveyForm from "./SurveyForm";


class SurveyNew extends React.Component {
    render() {
        return (
            <div>
                <h2 className="uk-text-uppercase uk-heading-divider uk-padding uk-padding-remove-horizontal">
                    New survey
                </h2>
                <SurveyForm/>
            </div>
        );
    }
}

export default SurveyNew;
