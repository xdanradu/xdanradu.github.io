import React, { Component } from 'react';
import './home.scss';
import VanillaTilt from 'vanilla-tilt';
import LazyLoad from 'react-lazyload';
import { LinkedinIcon } from '../../components/icons/linkedin-icon';
import { GithubIcon } from '../../components/icons/github-icon';
import PetriGraph from '../../components/teaching/petri-graph/petri-graph';

function MyImage() {
  return (
    <div className="image">
      <LazyLoad once>
        <img alt="Profile" src={require('../../resources/images/dan.jpg')} />
      </LazyLoad>
    </div>
  );
}

class Home extends Component {
  componentDidMount = function () {
    VanillaTilt.init(document.querySelectorAll('.tech-logo-img, .social'), {
      max: 10,
      speed: 400,
      scale: 1.2,
      glare: 0.5,
      perspective: 500
    });
  };

  render() {
    return (
      <div className="home-container">
        <div className="container">
          {/*<MyImage />*/}
          <div className="description">
            <p className="my-description">
              My name is Dan Radu, I'm a{' '}
              Fullstack Software Developer based in Cluj-Napoca, Romania.
              I have over 12 years of programming experience and previously
              worked with a wide range of software technologies and
              architectures, both on desktop and web applications. I've been
              programming on the web with:{' '}

                JavaScript, Angular, ReactJS, CSS, HTML, REST API's, Java
                (Spring boot, Hibernate, Flyway/Liquibase), C#, PHP, SQL, Git.

              {/*I also have experience with the Agile process and understand the benefits of using the CI/CD (Jenkins, Docker, AWS) pipeline.*/}
            </p>
            {/*<div className="tech-container">
                    <div className="tech-logo"><img alt="JavaScript" className="tech-logo-img" src={require("../../resources/images/javascript.png")} /></div>
                    <div className="tech-logo"><img alt="Angular" className="tech-logo-img" src={require("../../resources/images/angular.png")} /></div>
                    <div className="tech-logo"><img alt="Spring boot" className="tech-logo-img" src={require("../../resources/images/spring-boot.png")} /></div>
                    <div className="tech-logo"><img alt="Git" className="tech-logo-img" src={require("../../resources/images/git.png")} /></div>
                    </div>*/}
            {/*<p>I am a lecturer at the <b>Technical University of Cluj-Napoca</b> since 2012 when I defended my PhD thesis called
                        "<b>Efficient Routing Strategies for Mobile Ad Hoc Networks</b>". </p>*/}

            <div className="social-icons">
              <div
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/dan-radu-74a80563/',
                    '_blank'
                  )
                }
              >
                <LinkedinIcon />
              </div>
              <div
                onClick={() =>
                  window.open('https://github.com/xdanradu', '_blank')
                }
              >
                <GithubIcon />
              </div>
            </div>
          </div>
        </div>

        {/* <PetriGraph />*/}
      </div>
    );
  }
}

export default Home;
