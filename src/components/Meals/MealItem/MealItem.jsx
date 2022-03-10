import React from 'react';

import MealItemForm from '../MealItemForm/MealItemForm';

import classes from './style.module.css';

function MealItem({
  id, name, description, price,
}) {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>

      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}

export default MealItem;
