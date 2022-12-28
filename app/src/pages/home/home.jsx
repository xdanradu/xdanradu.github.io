import React, { Component } from 'react';
import './home.scss';
import VanillaTilt from 'vanilla-tilt';
import '../../resources/styles/prism.css';
import SOLID from '../../json-data/solid';
import AccordionItem from '../../components/accordion-item/accordion-item';

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
          <div className="skills-container">
            <h1>SOLID Principles</h1>
            {SOLID.map(item => (
              <AccordionItem key={item.title} data={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
