import React from 'react';
import { Link } from "react-router-dom";

import './Dashboard.css';


export const Dashboard = () => {
    return (
        <div>
            <h2 className="uk-text-uppercase uk-heading-divider uk-padding uk-padding-remove-horizontal">Dashboard</h2>
            <div className="uk-position-bottom-right uk-position-fixed uk-position-large uk-flex">
                <Link to="/survey/new" className="add-survey">
                    <i className="fas fa-plus-circle"></i>
                </Link>
            </div>
        </div>
    );
};
