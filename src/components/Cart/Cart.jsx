import React from 'react';

import Modal from '../Modal/Modal';

import classes from './style.module.css';

function Cart({ onClose }) {
  const cartItems = [
    {
      id: 'c1',
      name: 'Sushi',
      amount: 2,
      price: 12.99,
    },
  ];

  return (
    <Modal onClose={onClose}>
      {cartItems.map((item) => (
        <ul className={classes['cart-items']}>
          <li>{item.name}</li>
        </ul>
      ))}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>

      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        <button type="button" className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
