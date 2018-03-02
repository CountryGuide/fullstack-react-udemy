import React from 'react';
import { connect } from "react-redux";
import { FIELDS } from './formFields';
import * as actions from '../../actions';
import { withRouter } from "react-router-dom";


const SurveyReview = ({ onCancel, formValues, sendSurvey, history }) => {
    const reviewFields = FIELDS.map((field, i) => {
        return (
            <div key={i}>
                <label className="uk-article-meta">{field.label}</label>
                <div>{formValues[field.name]}</div>
                <div className="uk-heading-divider"></div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm</h5>
            <div className="uk-card uk-card-default uk-padding-small">
                {reviewFields}
                <div className="uk-padding-small uk-padding-remove-horizontal uk-flex uk-flex-between">
                    <button
                        className="uk-button uk-button-default uk-button-small"
                        onClick={onCancel}>
                        Back
                    </button>
                    <button
                        className="uk-button uk-button-primary uk-button-small"
                        onClick={() => sendSurvey(formValues, history)}>
                        Send Survey
                    </button>
                </div>
            </div>
        </div>
    );
};

function mapStateToProps ({ form }) {
    return { formValues: form.surveyForm.values};
}

export const SurveyFormReview = connect(mapStateToProps, actions)(withRouter(SurveyReview));