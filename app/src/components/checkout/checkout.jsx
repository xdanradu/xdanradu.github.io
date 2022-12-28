import React from 'react';
import './checkout.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { observer } from 'mobx-react-lite';
import { CartButton } from './cart-button';
import { CartBody } from './cart-body';

const Checkout = observer(({ store }) => (
  <Popup
    trigger={
      <div>
        <CartButton store={store} />
      </div>
    }
    modal
    nested
  >
    {close => <CartBody store={store} close={close} />}
  </Popup>
));

export default Checkout;
