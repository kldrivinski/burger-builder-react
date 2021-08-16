import React, { Component } from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    // lifecycle method, logs whenever the component is rendered
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate')
    }


    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span>
                            {igKey}
                        </span>
                        {this.props.ingredients[igKey]}
                    </li>
                )
            });


        return (
            <Aux>
                <h3>Your Order</h3>
                <p>here's what you have:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: ${this.props.price.toFixed(2)}</p>
                <p>Continue?</p>
                <Button btnType="Danger" clicked={this.props.orderCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.orderContinued}>Continue</Button>


            </Aux>
        );
    }



}

export default OrderSummary;