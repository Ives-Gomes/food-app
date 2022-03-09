import React from 'react';

import mealsImg from '../../assets/meals.jpg';

import classes from './style.module.css';

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button type="button">Cart</button>
      </header>

      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </>
  );
}

export default Header;
