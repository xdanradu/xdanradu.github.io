import React from "react";
import "./navbar.scss";
import {
  NavLink
} from "react-router-dom";
import Checkout from "../checkout/checkout";
import About from "../../pages/about/about";

const darkTheme = {
  primaryColor: "#222",
  secondaryColorDarker: "#111",
  secondaryColorDark: "#222",
  secondaryColorLight: "#818181",
  secondaryColorLighter: "#bbb",
  firstAccentColor: "#7dba5c",
  firstAccentColorDark: "#539149",
  secondAccentColor: "#ffca28"
}

const lightTheme = {
  primaryColor: "#cbcbcb",
  secondaryColorDarker: "#b8b8b8",
  secondaryColorDark: "#eeeeee",
  secondaryColorLight: "#111111",
  secondaryColorLighter: "#282828",
  firstAccentColor: "#bb0000",
  firstAccentColorDark: "#bb0000",
  secondAccentColor: "#1292d5"
}

const NavBar = ({ counters, onDecrement, onIncrement, onReset }) => {

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
    document.documentElement.style.setProperty("--first-accent-color-dark", theme.firstAccentColorDark);
    document.documentElement.style.setProperty("--second-accent-color", theme.secondAccentColor);
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

        <NavLink exact={true}  to="/" activeclassname="active" onClick={(e) => toggle(e)}>
          Home
        </NavLink>
        {/*<NavLink to="/about" activeclassname="active" onClick={(e) => toggle(e)}>
          About
        </NavLink>*/}
        <NavLink to="/skills" activeclassname="active" onClick={(e) => toggle(e)}>
          Skills
        </NavLink>
        <NavLink to="/shop" activeclassname="active" onClick={(e) => toggle(e)}>
          Shop
        </NavLink>
        {/*<a id="experience" href="#experience"  onClick={(e) => toggle(e)}>
          Clients
        </a>*/}
        {/*<a id="portfolio" href="#portfolio" onClick={(e) => toggle(e)}>
          Portfolio
        </a>*/}
        {/*<a id="contact" href="#contact" onClick={(e) => toggle(e)}>
          Contact
        </a>*/}
        <div className="badge-pill">
          <Checkout counters={counters} onDecrement={onDecrement} onIncrement={onIncrement} onReset={onReset}/>
        </div>


        <a id="breadcrumb" onClick={(e) => toggle(e)} className="icon" >
          <i className="fa fa-bars"></i>
        </a>

        <div className="theme">
          <button id="dark-theme" className="btn btn-dark active" onClick={() => setTheme("dark")}> </button>
          <button id="light-theme" className="btn btn-light" onClick={() => setTheme("light")}> </button>
        </div>

      </div>


    </nav>



  );
};

export default NavBar;
