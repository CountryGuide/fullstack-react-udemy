import React from 'react';
import {connect} from "react-redux";
import {BrowserRouter, Route} from 'react-router-dom';

import Header from "./Header";
import {Landing} from "./Landing";

import * as actions from "../actions";


const Dashboard = () => <h2>Dashboard</h2>;
const Survey    = () => <h2>Survey</h2>;


class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <div className="uk-container">
                            <Route path={'/'} exact component={Landing}/>
                            <Route path={'/survey'} exact component={Dashboard}/>
                            <Route path={'/survey/new'} component={Survey}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default connect(null, actions)(App);
