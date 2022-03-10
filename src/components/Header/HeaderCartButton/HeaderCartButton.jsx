import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../../Cart/CartIcon/CartIcon';

import CartContext from '../../../store/Cart/CartContext';

import classes from './style.module.css';

function HeaderCartButton({ onClick }) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0,
  );

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
