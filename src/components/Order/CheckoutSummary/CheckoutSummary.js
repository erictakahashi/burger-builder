import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  const cancelHandler = () => {
    console.log('Cancelled');
  }

  const continueHandler = () => {
    console.log('Cancelled');
  }

  return (
    <div className={styles.CheckoutSummary}>
      <h1>Looks tasty!</h1>
      <div className={styles.BurgerContainer}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button type="Danger" clicked={cancelHandler}>Cancel</Button>
      <Button type="Success" clicked={continueHandler}>Continue</Button>
    </div>
  );
}

export default checkoutSummary;