import React, { Component } from 'react';
import './checkout.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ShoppingCartIcon } from '../icons/shopping-cart-icon';
import { Products } from './products';

class Checkout extends Component {
  render() {
    let { counters, onDecrement, onIncrement, onReset, onCleared } = this.props;
    return (
      <Popup
        trigger={
          <div>
            <div className="shopping-cart-icon">
              <ShoppingCartIcon />
            </div>
            <button
              className={`button ${
                counters.filter(c => c.value > 0).length === 0
                  ? 'empty'
                  : 'not-empty'
              }`}
            >
              {' '}
              {counters.filter(c => c.value > 0).length}{' '}
            </button>
          </div>
        }
        modal
        nested
      >
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            {/*<div className="header"> Checkout </div>*/}
            <div className="content">
              <Products
                products={counters}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
                onReset={onReset}
                onCleared={onCleared}
              />
            </div>
            <div className="actions">
              <button
                className="action-btn"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                Cancel
              </button>

              <button
                className="action-btn"
                onClick={() => {
                  console.log('modal closed ');
                  close();
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}

export default Checkout;
