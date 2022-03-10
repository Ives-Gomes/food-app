import React from 'react';

import classes from './style.module.css';

function Card({ children }) {
  return (
    <div className={classes.card}>
      {children}
    </div>
  );
}

export default Card;
