import React, { Component } from 'react';

import axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get('/orders.json')
      .then(response => {
        const fetchedOrders = response.data;
        const orders = [];
        for (let key in fetchedOrders) {
          orders.push({
            ...fetchedOrders[key],
            id: key
          });
        }
        this.setState({ orders: orders, loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
      })
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order key={order.id}
            ingredients={order.ingredients}
            price={+order.price} />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios); 