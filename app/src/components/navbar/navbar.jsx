import React from "react";
import "./navbar.scss";
import {
  NavLink
} from "react-router-dom";

const darkTheme = {
  primaryColor: "#222",
  secondaryColorDarker: "#111",
  secondaryColorDark: "#222",
  secondaryColorLight: "#818181",
  secondaryColorLighter: "#bbb",
  firstAccentColor: "#7dba5c",
}

const lightTheme = {
  primaryColor: "#cbcbcb",
  secondaryColorDarker: "#b8b8b8",
  secondaryColorDark: "#eeeeee",
  secondaryColorLight: "#111111",
  secondaryColorLighter: "#282828",
  firstAccentColor: "#bb0000",
}

const NavBar = ({ totalCounters }) => {

  function setTheme(option) {
    let theme = darkTheme;
    if (option === "light") {
      theme = lightTheme;
      document.getElementById("dark-theme").className="btn btn-dark";
      document.getElementById("light-theme").className="btn btn-light active";
    } else {
      document.getElementById("dark-theme").className="btn btn-dark active";
      document.getElementById("light-theme").className="btn btn-light";
    }
    document.documentElement.style.setProperty("--primary-color", theme.primaryColor);
    document.documentElement.style.setProperty("--secondary-color-darker", theme.secondaryColorDarker);
    document.documentElement.style.setProperty("--secondary-color-dark", theme.secondaryColorDark);
    document.documentElement.style.setProperty("--secondary-color-light", theme.secondaryColorLight);
    document.documentElement.style.setProperty("--secondary-color-lighter", theme.secondaryColorLighter);
    document.documentElement.style.setProperty("--first-accent-color", theme.firstAccentColor);
  }

  function toggle(e) {
    //e.preventDefault();
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
        <NavLink to="/about" activeclassname="active" onClick={(e) => toggle(e)}>
          About
        </NavLink>
        <NavLink to="/skills" activeclassname="active">
          Skills
        </NavLink>
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
        <div className="theme">
          <button id="dark-theme" className="btn btn-dark active" onClick={() => setTheme("dark")}> </button>
          <button id="light-theme" className="btn btn-light" onClick={() => setTheme("light")}> </button>
        </div>
        <a id="breadcrumb" onClick={(e) => toggle(e)} className="icon" >
          <i className="fa fa-bars"></i>
        </a>
      </div>


    </nav>



  );
};

export default NavBar;
