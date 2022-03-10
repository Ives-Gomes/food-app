import React, { useContext } from 'react';

import CartIcon from '../../Cart/CartIcon/CartIcon';

import CartContext from '../../../store/Cart/CartContext';

import classes from './style.module.css';

function HeaderCartButton({ onClick }) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0,
  );

  return (
    <button type="button" className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
