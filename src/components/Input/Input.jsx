import React, { forwardRef } from 'react';

import classes from './style.module.css';

const Input = forwardRef((props, ref) => (
  <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input} />
  </div>
));

export default Input;
