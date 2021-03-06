import React, { Component } from 'react';

class Order extends Component {
  render() {

    const { user, product, price } = this.props.order;

    return (
      <div>
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;
