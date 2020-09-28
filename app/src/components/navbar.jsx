import React from "react";
import "./Navbar.css";

const NavBar = ({ totalCounters }) => {
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
      <div class="topnav" id="myTopnav">
        <a id="home" href="#home" class="active">
          Home
        </a>
        <a id="about" href="#about">
          About
        </a>
        <a id="skills" href="#skills">
          Skills
        </a>
        <a id="experience" href="#experience">
          Experience
        </a>
        <a id="portfolio" href="#portfolio">
          Portfolio
        </a>
        <a id="contact" href="#contact">
          Contact
        </a>
        <span className="m-2">Active counters</span>
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
        <a id="breadcrumb" onClick={(e) => toggle(e)} class="icon" >
          <i class="fa fa-bars"></i>
        </a>
      </div>

    </nav>

  );
};

export default NavBar;
