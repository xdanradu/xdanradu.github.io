import React, { Component } from "react";
import "./home.scss";
import VanillaTilt from "vanilla-tilt";

class Home extends Component {
    componentDidMount =  function() {
        VanillaTilt.init(document.querySelectorAll(".tech-logo-img, .fa"), {
            max: 10,
            speed: 400,
            scale: 1.2,
            glare: 0.5,
            perspective:500
        });
    }

    render() {


        return (
            <div className="home-container">
                <div className="container">
                    <div className="image">
                        <img src={require("../../resources/images/dan.jpg")} />
                    </div>
                <div className="description">
                    <p>I have 12+ years of programming experience and previously worked with a wide range of
                        software technologies and architectures, both on desktop and web applications.
                        I've been programming on the web with: JavaScript, Angular, ReactJS, CSS, HTML, REST API's, Java, C#, PHP, SQL.</p>
                    <div className="tech-logo"><img className="tech-logo-img" src={require("../../resources/images/javascript.png")} /></div>
                    <a className="icons" >
                        <div><i className="fa fa-linkedin"></i></div>
                        <div><i className="fa fa-github"></i></div>
                        <div><i className="fa fa-facebook"></i></div>
                    </a>
                </div>

                </div>
            </div>
        );
    }
}

export default (Home);
