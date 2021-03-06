// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props;
    const { value, currency } = this.props;

    return (
      <div className="order">
        <p> {user} bought {product} for {value} {currency} </p>
      </div>
    );
  }
}

export default Order;