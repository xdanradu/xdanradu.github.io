import { observer } from 'mobx-react-lite';
import { ProductList } from './product-list';
import React from 'react';
import './cart-body.scss';
import { EmptyCheckout } from './empty-checkout';

function content(store) {
  return store.total > 0 ? <ProductList store={store} /> : <EmptyCheckout />;
}
export const CartBody = observer(({ close, store }) => (
  <div className="modal">
    <button className="close" onClick={close}>
      &times;
    </button>
    <div className="content">{content(store)}</div>
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
));
