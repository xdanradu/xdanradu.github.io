import React, { Component } from "react";
import "./card.scss";

class Card extends Component {
    render() {
        let {position, title, description, counter, onIncrement} = this.props;
        return (
                <div className="card">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                        <h2>{position}</h2>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a onClick={() => onIncrement(counter)}>Add to cart</a>
                    </div>
                </div>
        );
    }
}

export default (Card);
