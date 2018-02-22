import React from 'react';
import { reduxForm, Field } from 'redux-form';


class SurveyForm extends React.Component {
    render() {
        return (
            <div>
                <h3 className="uk-text-uppercase">
                    Survey Form
                </h3>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    <Field
                        type={'text'}
                        name={'surveyTitle'}
                        component={'input'}
                    />
                </form>

            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);

