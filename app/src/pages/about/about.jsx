import React, { Component } from "react";
import "./about.scss";
import Card from "../../components/card/card";

class About extends Component {
    render() {
        let {counters, onIncrement} = this.props;
        return (
            <div className="card-container">
                <Card position="02" title="JavaScript" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua." counter={counters[0]} onIncrement={onIncrement}/>
                <Card position="01" title="Angular" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua." counter={counters[1]} onIncrement={onIncrement}/>
                <Card position="03" title="Java" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua." counter={counters[2]} onIncrement={onIncrement}/>
                <Card position="04" title="C#" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua." counter={counters[3]} onIncrement={onIncrement}/>
                <Card position="05" title="SQL" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua." counter={counters[4]} onIncrement={onIncrement}/>
            </div>
        );
    }
}

export default (About);
