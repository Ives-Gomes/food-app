import React, { useContext, useState } from 'react';

import Modal from '../Modal/Modal';
import CartItem from './CartItem/CartItem';
import Checkout from '../Checkout/Checkout';

import CartContext from '../../store/Cart/CartContext';

import classes from './style.module.css';

function Cart({ onClose }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch('https://food-app-bbf46-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });

    setIsSubmitting(false);
    setDidSubmit(true);

    cartCtx.clearCart();
  };

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !didSubmit && (
        <>
          <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                // eslint-disable-next-line react/jsx-no-bind
                onAdd={cartItemAddHandler.bind(null, item)}
                // eslint-disable-next-line react/jsx-no-bind
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
              />
            ))}
          </ul>

          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>

          {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />}

          {!isCheckout && (
            <div className={classes.actions}>
              <button type="button" className={classes['button--alt']} onClick={onClose}>
                Close
              </button>

              {hasItems && (
              <button
                type="button"
                className={classes.button}
                onClick={orderHandler}
              >
                Order
              </button>
              )}
            </div>
          )}
        </>
      )}

      {isSubmitting && <p>Sending order data...</p>}
      {!isSubmitting && didSubmit && (
        <>
          <p>Successfully sent the order!</p>

          <div className={classes.actions}>
            <button type="button" className={classes.button} onClick={onClose}>
              Close
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}

export default Cart;
