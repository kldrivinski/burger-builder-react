import React, { Component } from 'react';
import Order from '../../components/Order/Order'

class Orders extends Component {
    state = {
        orders: [],
        loading: false,
        totalPrice: 0
    }

    componentDidMount() {
        // this.state.orders.push();
        console.log('order price ' + this.props.price);

        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ totalPrice: price }, () => {
            console.log('mounted state ' + this.state.totalPrice);


        });

    }
    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default Orders;