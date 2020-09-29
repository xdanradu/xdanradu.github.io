import React from "react";
import "./navbar.scss";
import {
  Link,
  NavLink
} from "react-router-dom";

const NavBar = ({ totalCounters }) => {

  function setTheme(color) {
    console.log('here');
    if (color === "default")
      color = "#08e608";
    document
            .documentElement
            .style
            .setProperty("--secondary-color", color);
  }

  function toggle(e) {
    e.preventDefault();
    var topnav = document.getElementById("myTopnav");
    if (topnav.className === "topnav") {
      topnav.className += " responsive";
    } else {
      topnav.className = "topnav";
    }
  }

  return (
    <nav>
      <div className="topnav" id="myTopnav">
        <NavLink exact={true}  to="/" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/about" activeclassname="active">
          About
        </NavLink>
        <Link to="/skills" activeclassname="active">
          Skills
        </Link>
        <a id="experience" href="#experience">
          Experience
        </a>
        <a id="portfolio" href="#portfolio">
          Portfolio
        </a>
        <a id="contact" href="#contact">
          Contact
        </a>
        <div className="badge-pill">
          {totalCounters}
        </div>
        <a id="breadcrumb" onClick={(e) => toggle(e)} className="icon" >
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <div className="main">
        <button onClick={() => setTheme("red")}>Set Theme(Red)</button>
        <button onClick={() => setTheme("orangered")}>Set Theme(Orange-Red)</button>
        <button onClick={() => setTheme("default")}>Reset Theme Default</button>
      </div>

    </nav>



  );
};

export default NavBar;
