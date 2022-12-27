import React, { Component } from 'react';
import './card.scss';
import {observer} from "mobx-react-lite";

function Badge(props) {
  let { value } = props;
  if (value > 0) return <div className="counter-badge">{value}</div>;
  return '';
}

const ProductCard = observer(({ product }) => (

    <div className="card">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="content">
            <Badge value={product.quantity} />

            <h2>0{product.id}</h2>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button className="noselect" onClick={() => product.inc()}>
                Add to cart
            </button>
        </div>
    </div>
))


export default ProductCard;
