import React from 'react';

import styles from './Order.module.css';

const order = (props) => {
  const ingredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return <span key={ingredientKey}
                className={styles.Ingredient}>{ingredientKey} ({props.ingredients[ingredientKey]})</span>
    });

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredients}</p>
      <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
    </div>
  );
}

export default order;