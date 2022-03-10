import React from 'react';

import Card from '../../Card/Card';
import MealItem from '../MealItem/MealItem';

import classes from './style.module.css';

import DUMMY_MEALS from '../../../utils/dummyMeals';

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
