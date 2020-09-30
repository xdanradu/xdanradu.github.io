import React, { Component } from "react";
import "./about.scss";
import Card from "../card/card";

class About extends Component {
    render() {
        return (
            <div className="card-container">
                <Card position="02" title="JavaScript" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua."/>
                <Card position="01" title="Angular" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua."/>
                <Card position="03" title="Java" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua."/>
                <Card position="04" title="C#" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua."/>
                <Card position="05" title="SQL" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua."/>
            </div>
        );
    }
}

export default (About);
