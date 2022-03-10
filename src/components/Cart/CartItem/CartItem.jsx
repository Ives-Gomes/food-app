import React from 'react';

import classes from './CartItem.module.css';

function CartItem({
  name, price, amount, onRemove, onAdd,
}) {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{formattedPrice}</span>
          <span className={classes.amount}>
            x
            {amount}
          </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onRemove}>−</button>
        <button type="button" onClick={onAdd}>+</button>
      </div>
    </li>
  );
}

export default CartItem;
