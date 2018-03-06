import React from 'react';
import { fetchSurveys } from '../../actions';
import { connect } from "react-redux";


class SurveyList extends React.Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.map(survey => {
            return (
                <div key={survey._id} className="uk-card uk-card-default uk-card-small uk-margin uk-animation-fade">
                    <div className="uk-card-header">
                        <div className="uk-card-title uk-margin-remove-bottom">{survey.title}</div>
                        <p className="uk-text-meta uk-margin-remove-top">{survey.subject}</p>
                    </div>
                    <div className="uk-card-body">{survey.body}</div>
                    <div className="uk-card-footer uk-flex uk-flex-between">
                        <div>
                            <span className="uk-label uk-label-success uk-margin-small-right">Yes: {survey.yes}</span>
                            <span className="uk-label uk-label-danger">No: {survey.no}</span>
                        </div>
                        <div>
                            <time dateTime={survey.dateSent}>{(new Date(survey.dateSent)).toLocaleString('ru')}</time>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                {this.props.surveys && this.renderSurveys()}
            </div>
        );
    }
}


const mapStateToProps = ({ surveys }) => {
    return { ...surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
