import React from 'react';


const displayError = (error) => {
    return `pos: right; title: ${error}`;
};

export const SurveyField = ({ input, label, meta: { error, touched, active } }) => {
    return (
        <div className="uk-margin-small">
            <label>
                <span className="uk-form-label">{label}</span>
                <div className="uk-form-controls">
                    <input
                        className={
                            touched && error && !active ?
                                "uk-input uk-form-small uk-form-danger" :
                                "uk-input uk-form-small"
                        }
                        data-uk-tooltip={
                            (touched && error && !active && displayError(error)) || null
                        }
                        {...input}/>
                </div>
            </label>
        </div>
    );
};
