import React, { Component } from "react";
import "./home.scss";
import VanillaTilt from "vanilla-tilt";

class Home extends Component {
    componentDidMount =  function() {
        VanillaTilt.init(document.querySelectorAll(".tech-logo-img, .social"), {
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
                    <p className="my-description">My name is <b>Dan Radu</b>, I'm a <b>fullstack Software Developer</b> based in Cluj-Napoca, Romania.</p>
                    <p>I have over 12 years of programming experience and previously worked with a wide range of
                        software technologies and architectures, both on desktop and web applications.
                        I've been programming on the web with: <b>JavaScript, Angular, ReactJS, CSS, HTML, REST API's, Java (Spring boot, Hibernate, Flyway/Liquibase), C#, PHP, SQL, Git.</b>
                         <br/>I also have experience with the Agile process and understand the benefits of the CI/CD (Jenkins, Docker, AWS) pipeline.

                        </p>
                    <div className="tech-container">
                    <div className="tech-logo"><img className="tech-logo-img" src={require("../../resources/images/javascript.png")} /></div>
                    <div className="tech-logo"><img className="tech-logo-img" src={require("../../resources/images/angular.png")} /></div>
                    <div className="tech-logo"><img className="tech-logo-img" src={require("../../resources/images/spring-boot.png")} /></div>
                    <div className="tech-logo"><img className="tech-logo-img" src={require("../../resources/images/git.png")} /></div>
                    </div>
                    {/*<p>I am a lecturer at the <b>Technical University of Cluj-Napoca</b> since 2012 when I defended my PhD thesis called
                        "<b>Efficient Routing Strategies for Mobile Ad Hoc Networks</b>". </p>*/}

                    <div className="social-icons">
                        <div><i onClick={()=> window.open("https://www.linkedin.com/in/dan-radu-74a80563/", "_blank")} className="social fa fa-linkedin"></i></div>
                        <div><i onClick={()=> window.open("https://github.com/xdanradu", "_blank")} className="social fa fa-github"></i></div>
                        <div><i onClick={()=> window.open("https://www.facebook.com/xdanradu", "_blank")} className="social fa fa-facebook"></i></div>
                    </div>
                </div>

                </div>
            </div>
        );
    }
}

export default (Home);
