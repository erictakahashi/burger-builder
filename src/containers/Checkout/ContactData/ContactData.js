import React, { Component } from 'react';

import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';

class ContactData extends Component {
  state = {
    address: {
      country: "Brazil",
      street: "Test Street A",
      zipCode: "12345"
    },
    email: "test@test.com",
    name: "Eric",
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Eric',
        address: {
          street: 'Test Street A',
          zipCode: '12345',
          country: 'Brazil'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };

    // For firebase it is necessary to add the .json extension.
    axios.post('orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render() {
    let form = (
      <form>
        <input className={styles.Input} type="text" name="name" placeholder="Your Name" />
        <input className={styles.Input} type="email" name="email" placeholder="Your Email" />
        <input className={styles.Input} type="text" name="street" placeholder="Street" />
        <input className={styles.Input} type="text" name="zipcode" placeholder="Zip Code" />
        <input className={styles.Input} type="text" name="country" placeholder="Country" />
        <Button type="Success" clicked={this.orderHandler}>Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }

    return (
      <div className={styles.ContactData}>
        <h4>Enter your contact data:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;