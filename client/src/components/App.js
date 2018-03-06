import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';

import Header from "./Header";
import { Landing } from "./Landing";
import { Dashboard } from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

import * as actions from "../actions";

import './App.css';
import { Helmet } from "react-helmet";


class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>AR</title>
                </Helmet>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div className="uk-container">
                            <Route path={'/'} exact component={Landing}/>
                            <Route path={'/surveys'} exact component={Dashboard}/>
                            <Route path={'/survey/new'} component={SurveyNew}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default connect(null, actions)(App);
