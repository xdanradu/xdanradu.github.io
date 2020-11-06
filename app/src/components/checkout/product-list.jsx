import { SmallIcon } from '../icons/small-icon';
import { PlusIcon } from '../icons/plus-icon';
import { MinusIcon } from '../icons/minus-icon';
import { RemoveIcon } from '../icons/remove-icon';
import React from 'react';
import './product-list.scss';

export function ProductList(props) {
  let { products, onDecrement, onIncrement, onReset, onCleared } = props;

  return (
    <div>
      <div className="grid-container">
        <div className="checkout-products-row product-header">
          <div className="grid-item product-header-name">Product/service</div>
          <div className="grid-item"></div>
        </div>
        {products
          .filter(c => c.value > 0)
          .map(product => (
            <div className="product" key={product.id}>
              <div className="checkout-products-row">
                <div className="grid-item checkout-product-name">
                  {product.name} ({product.value})
                </div>
                <div className="grid-item checkout-buttons">
                  <button
                    className="action-btn"
                    onClick={() => onIncrement(product)}
                  >
                    +
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => onDecrement(product)}
                  >
                    -
                  </button>
                  <button
                    className="action-btn"
                    onClick={() => onReset(product)}
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          ))}

        <div className="checkout-products-row product-footer">
          <div className="grid-item product-footer-total">
            Total:{' '}
            {products
              .filter(c => c.value > 0)
              .reduce((acc, c) => acc + c.value, 0)}
          </div>
          <div
            className="grid-item product-footer-remove"
            onClick={() => onCleared()}
          >
            Remove all
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
