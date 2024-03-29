import React, { Component } from 'react';
import './card.scss';

function Badge(props) {
  let { value } = props;
  if (value > 0) return <div className="counter-badge">{value}</div>;
  return '';
}

class Card extends Component {
  render() {
    let { position, title, description, counter, onIncrement } = this.props;
    return (
      <div className="card">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="content">
          <Badge value={counter.value} />

          <h2>0{position}</h2>
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="noselect" onClick={() => onIncrement(counter)}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
