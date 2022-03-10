import React from 'react';

import Input from '../../Input/Input';

import classes from './style.module.css';

function MealItemForm({ id }) {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: `amount_${id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />

      <button type="button">+ Add</button>
    </form>
  );
}

export default MealItemForm;
