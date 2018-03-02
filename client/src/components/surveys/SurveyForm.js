import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SurveyField } from "./SurveyField";
import { Link } from "react-router-dom";
import { validateEmails } from "../../utils/validateEmails";
import { FIELDS } from './formFields';


class SurveyForm extends React.Component {
    renderFields () {
        return FIELDS.map(({ label, name }, i) => {
            return (
                <Field component={SurveyField} type="text" label={label} name={name} key={i}/>
            );
        })
    }

    render () {
        return (
            <div>
                <div className="uk-card uk-card-default uk-card-small uk-card-body uk-width-1-2">
                    <form
                        onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
                        className="uk-form-stacked">
                        <legend className="uk-legend">
                            Survey Form
                        </legend>
                        {this.renderFields()}
                        <div
                            className="uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom uk-flex uk-flex-between">
                            <Link to="/surveys" className="uk-button uk-button-default uk-button-small">
                                Cancel
                            </Link>
                            <button type={'submit'} className="uk-button uk-button-primary uk-button-small">
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function validate (values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);

