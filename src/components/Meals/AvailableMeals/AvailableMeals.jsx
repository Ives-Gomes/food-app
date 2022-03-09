import React from 'react';

import classes from './style.module.css';

import DUMMY_MEALS from '../../../utils/dummyMeals';

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li>
            {meal.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AvailableMeals;
