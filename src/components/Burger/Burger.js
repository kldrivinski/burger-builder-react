import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css'


const burger = (props) => {

    let transformedIngredients =
        Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    return <BurgerIngredients key={igKey + i} type={igKey} />;
                });
            })
            //transform the array, takes in previous and current value
            .reduce((arr, el) => {
                //loop through all the elements and add to initial value
                return arr.concat(el)
            }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    };

    console.log(transformedIngredients);


    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />

        </div>

    );


};

export default burger;