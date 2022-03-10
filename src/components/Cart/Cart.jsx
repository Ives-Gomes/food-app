import React from 'react';

import classes from './style.module.css';

function Cart() {
  const cartItems = [
    {
      id: 'c1',
      name: 'Sushi',
      amount: 2,
      price: 12.99,
    },
  ];

  return (
    <div>
      {cartItems.map((item) => (
        <ul className={classes['cart-items']}>
          <li>{item.name}</li>
        </ul>
      ))}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>

      <div>
        <button type="button" className={classes['button--alt']}>
          Close
        </button>
        <button type="button" className={classes.button}>Order</button>
      </div>
    </div>
  );
}

export default Cart;
