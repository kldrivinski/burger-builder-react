import React from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from '../ContactData/ContactData.module.css'
import { Route } from 'react-router-dom';
import Orders from '../../Orders/Orders';

class ContactData extends React.Component {

    state = {
        ingredients: null,
        totalPrice: 0


    }

    componentWillMount() {

        console.log('props ingredients ' + this.props.ingredients);

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
        // console.log('path price ' + price)
        // console.log('path ingredients ' + ingredients);

        // this.setState({ ingredients: ingredients }, () => {
        //     console.log('mounted state ' + this.state.ingredients);

        // });
        this.setState({ totalPrice: this.props.price }, () => {
            console.log('checkout price state ' + this.state.totalPrice);


        });


    }

    orderHandler = (event) => {
        event.preventDefault();
        // //this.props.history.push('/');
        // this.props.history.replace('/orders');

        console.log('order handler props ' + this.props.ingredients);
        // console.log('price props ' + this.props.price);


        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);

        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/orders',
            search: '?' + queryString
        });


        this.setState({ ingredients: this.props.ingredients }, () => {
            console.log('mounted state ' + this.state.ingredients);

        });
        this.setState({ totalPrice: this.props.price }, () => {
            console.log('checkout price state ' + this.state.totalPrice);
        });
    }

    render() {
        return (
            <div className={classes.ContactData} >
                <h3>Enter your contact data</h3>
                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
                {/* <Route path={this.props.match.path + '/orders'}
                    render={(props) => (<Orders
                        ingredients={this.props.ingredients} price={this.props.price} {...props} />)} />
 */}

            </div>
        )
    }

};

export default ContactData;