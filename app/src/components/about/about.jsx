import React, { Component } from "react";
import "./about.scss";

class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="content">
                        <h2>01</h2>
                        <h3>Fullstack</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. </p>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default (About);
