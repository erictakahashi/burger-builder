import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';

class ContactData extends Component {
  state = {
    address: {
      country: "Brazil",
      street: "Test Street A",
      zipCode: "12345"
    },
    email: "test@test.com",
    name: "Eric"
  }

  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data:</h4>
        <form>
          <input className={styles.Input} type="text" name="name" placeholder="Your Name" />
          <input className={styles.Input} type="email" name="email" placeholder="Your Email" />
          <input className={styles.Input} type="text" name="street" placeholder="Street" />
          <input className={styles.Input} type="text" name="zipcode" placeholder="Zip Code" />
          <input className={styles.Input} type="text" name="country" placeholder="Country" />
          <Button type="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;