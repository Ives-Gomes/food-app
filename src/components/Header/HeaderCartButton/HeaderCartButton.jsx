import React from 'react';

import CartIcon from '../../Cart/CartIcon/CartIcon';

import classes from './style.module.css';

function HeaderCartButton({ onClick }) {
  return (
    <button type="button" className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
