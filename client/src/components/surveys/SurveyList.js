import React from 'react';
import { fetchSurveys } from '../../actions';
import { connect } from "react-redux";


class SurveyList extends React.Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div key={survey._id}>
                    <div>{survey.title}</div>
                    <div>{survey.subject}</div>
                    <div>{survey.body}</div>
                    <div>{survey.dateSent}</div>
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
