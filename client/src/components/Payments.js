import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from "react-redux";
import * as actions from '../actions';


class Payments extends React.Component {
    render() {
        return (
            <StripeCheckout
                amount={1000}
                name={'Acoustic'}
                description={'10$ for 10 report generations'}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                <button className="uk-button uk-button-danger uk-button-small">
                    Add credits
                </button>
            </StripeCheckout>
        );
    }
}


export default connect(null, actions)(Payments);
