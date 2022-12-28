import { ShoppingCartIcon } from '../icons/shopping-cart-icon';
import React from 'react';
import { observer } from 'mobx-react-lite';
import './cart-button.scss';

export const CartButton = observer(({ store }) => (
  <div>
    <div className="shopping-cart-icon">
      <ShoppingCartIcon />
    </div>
    <button
      className={`button ${store.distinctLength === 0 ? 'empty' : 'not-empty'}`}
    >
      {' '}
      {store.distinctLength}{' '}
    </button>
  </div>
));
