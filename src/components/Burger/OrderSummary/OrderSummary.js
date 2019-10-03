import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import styles from './OrderSummary.module.css';

const orderSummary = ( props ) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span className={styles.ListLabel}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Burger ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button type="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button type="Success" clicked={props.purchaseContinued}>ORDER</Button>
    </Aux>
  );
};

export default orderSummary;