import React, { Component } from "react";
import "./about.scss";
import Card from "../../components/card/card";
import Counters from "../../components/counters/counters";
import {Route} from "react-router-dom";

class About extends Component {
    render() {
        let {counters, onIncrement, onReset, onDelete, onCreate} = this.props;
        return (
            <div className="about-container">
            <Counters
                onCreate={onCreate}
                onReset={onReset}
                onIncrement={onIncrement}
                onDelete={onDelete}
                counters={counters}
            />
            </div>
        );
    }
}

export default (About);
