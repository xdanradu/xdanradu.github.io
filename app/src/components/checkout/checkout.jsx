import React, { Component } from 'react';
import './checkout.scss';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ShoppingCartIcon } from '../icons/shopping-cart-icon';
import {observer} from "mobx-react-lite";
import {ProductList} from "./product-list";

const Checkout = observer(({ store }) => (
    <Popup
        trigger={
            <div>
                <div className="shopping-cart-icon">
                    <ShoppingCartIcon />
                </div>
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
                <div className="content">
                    <ProductList
                        store={store}
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
));

export default Checkout;
