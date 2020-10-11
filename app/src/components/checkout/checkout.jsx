import React, { Component } from "react";
import "./checkout.scss";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {ShoppingCart} from "../icons/shopping-cart";
import {RemoveIcon} from "../icons/remove-icon";
import {SmallIcon} from "../icons/small-icon";
import {PlusIcon} from "../icons/plus-icon";
import {MinusIcon} from "../icons/minus-icon";

function EmptyCheckout() {
    return <div className="center">There are no products inside the cart yet</div>;
}

function ProductList(props) {
    let {products, onDecrement, onIncrement, onReset} = props;

    return (
        <div className={"center"}>
        <div>Selected products:</div>
        {
            products.filter((c) => c.value > 0).map((product) => (
            <div>
                <h4>Product id: {product.id} Quantity: {product.value}
                    <button className="action-btn" onClick={() => onIncrement(product)}><SmallIcon icon={PlusIcon}/></button>
                    <button className="action-btn" onClick={() => onDecrement(product)}><SmallIcon icon={MinusIcon}/></button>
                    <button className="action-btn" onClick={() => onReset(product)}><SmallIcon icon={RemoveIcon}/></button>
                </h4>
            </div>
            ))
        }
            <div>Total: {products.filter((c) => c.value > 0).reduce((acc,c)=>acc+c.value,0)}</div>
        </div>
    );

}

function Products(props){
    const {isEmpty, products, onDecrement, onIncrement, onReset} = props;
    if(isEmpty) {
        return <EmptyCheckout/>;
    } else {
        return <ProductList key="products" products={products} onDecrement={onDecrement} onIncrement={onIncrement} onReset={onReset}/>;
    }
}

class Checkout extends Component {
    render() {
        let {counters, onDecrement, onIncrement, onReset} = this.props;
        return (
            <Popup
                trigger={
                    <div>
                        <div className="shopping-cart-icon"><ShoppingCart /></div>
                        <button className={`button ${counters.filter((c) => c.value > 0).length===0?'empty':'not-empty'}`}> {counters.filter((c) => c.value > 0).length} </button>
                    </div>}
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> Checkout </div>
                        <div className="content">

                            <Products isEmpty={counters.filter((c) => c.value > 0)===0} products={counters}
                                      onDecrement={onDecrement} onIncrement={onIncrement}  onReset={onReset}/>

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

export default (Checkout);
