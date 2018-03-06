import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import SurveyList from './surveys/SurveyList';

import './Dashboard.css';


export const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>AR: Dashboard</title>
            </Helmet>
            <h2 className="uk-text-uppercase uk-heading-divider uk-padding uk-padding-remove-horizontal">Dashboard</h2>
            <SurveyList />
            <div className="uk-position-bottom-right uk-position-fixed uk-position-large uk-flex uk-margin-xlarge-bottom">
                <Link to="/survey/new" className="add-survey">
                    <i className="fas fa-plus-circle"></i>
                </Link>
            </div>
        </div>
    );
};
