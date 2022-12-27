import React from 'react';
import './product-list.scss';
import {observer} from "mobx-react-lite";


export const ProductList = observer(({ store }) => (
    <div>
      <div className="grid-container">
        <div className="checkout-products-row product-header">
          <div className="grid-item product-header-name">Product/service</div>
          <div className="grid-item"></div>
        </div>
        {store.products
            .filter(c => c.quantity > 0)
            .map(product => (
                <div className="product" key={product.id}>
                  <div className="checkout-products-row">
                    <div className="grid-item checkout-product-name">
                      {product.title} ({product.quantity})
                    </div>
                    <div className="grid-item checkout-buttons">
                      <button
                          className="action-btn"
                          onClick={() => product.inc()}
                      >
                        +
                      </button>
                      <button
                          className="action-btn"
                          onClick={() => product.dec()}
                      >
                        -
                      </button>
                      <button
                          className="action-btn"
                          onClick={() => product.reset()}
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
            {store.total
                }
          </div>
          <div
              className="grid-item product-footer-remove"
              onClick={() => store.reset()}
          >
            Remove all
          </div>
        </div>
      </div>
      <div></div>
    </div>
));

