import React, { useContext } from 'react';

import MealItemForm from '../MealItemForm/MealItemForm';

import CartContext from '../../../store/Cart/CartContext';

import classes from './style.module.css';

function MealItem({
  id, name, description, price,
}) {
  const cartCtx = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>

      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
