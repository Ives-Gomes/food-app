import React, { useContext } from 'react';

import Modal from '../Modal/Modal';
import CartItem from './CartItem/CartItem';

import CartContext from '../../store/Cart/CartContext';

import classes from './style.module.css';

function Cart({ onClose }) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  return (
    <Modal onClose={onClose}>
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            // eslint-disable-next-line react/jsx-no-bind
            onAdd={cartItemAddHandler.bind(null, item.id)}
            // eslint-disable-next-line react/jsx-no-bind
            onRemove={cartItemRemoveHandler.bind(null, item)}
          />
        ))}
      </ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']} onClick={onClose}>
          Close
        </button>

        {hasItems && <button type="button" className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
