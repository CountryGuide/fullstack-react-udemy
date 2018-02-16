import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Header extends React.Component {
    renderContent () {
        switch (this.props.authState) {
            case null:
                return;
            case false:
                return (
                    <a className="uk-button uk-button-default" href="/auth/google">
                        <span className="uk-margin-small-right">Log In</span>
                        <i className="fab fa-google-plus-g"></i>
                    </a>
                );
            default:
                return (
                    <a className="uk-button uk-button-default" href="/api/logout">
                        <span>Log out</span>
                    </a>
                );
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
                <div className="uk-navbar-item uk-navbar-right">
                    {this.renderContent()}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({ ...state.auth });


export default connect(mapStateToProps)(Header);
