import React, { Component } from 'react';
import './shop.scss';
import Card from '../../components/card/card';

class Shop extends Component {
  render() {
    let { counters, onIncrement } = this.props;
    return (
      <div className="card-container">
        {counters.map(item => (
          <Card
            position={item.id}
            title={item.title}
            description={item.description}
            counter={item}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Shop;
