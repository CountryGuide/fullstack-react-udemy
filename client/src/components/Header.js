import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Payments from "./Payments";


class Header extends React.Component {
    renderContent () {
        switch (this.props.authState) {
            case null:
                return;
            case false:
                return (
                    <div key={2} className="uk-navbar-item uk-navbar-right">
                        <a className="uk-button uk-button-default" href="/auth/google">
                            <span className="uk-margin-small-right">Log In</span>
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </div>
                );
            default:
                return [
                    <div key={0} className="uk-navbar-item">
                        <Payments></Payments>
                    </div>,
                    <div key={1} className="uk-navbar-item">
                        Credits: {this.props.authState.credits}$
                    </div>,
                    <div key={2} className="uk-navbar-item uk-navbar-right">
                        <a className="uk-button uk-button-default" href="/api/logout">
                            <span>Log out</span>
                        </a>
                    </div>
                ];
        }
    }

    render () {
        return (
            <nav className="uk-navbar uk-background-secondary uk-light" data-uk-navbar>
                <Link className="uk-navbar-item uk-logo" to="/">AR</Link>
                <ul className="uk-navbar-nav">
                    <li>
                        <Link to="/survey">Surveys</Link>
                    </li>
                    <li>
                        <Link to="/survey/new">New survey</Link>
                    </li>
                </ul>
                {this.renderContent()}
            </nav>
        );
    }
}

const mapStateToProps = state => ({ ...state.auth });


export default connect(mapStateToProps)(Header);
