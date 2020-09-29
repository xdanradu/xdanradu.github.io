import React from "react";
import "./navbar.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
        Link,
  NavLink
} from "react-router-dom";

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
        <NavLink exact={true}  to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <Link to="/skills" activeClassName="active">
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
        <a id="breadcrumb" onClick={(e) => toggle(e)} class="icon" >
          <i class="fa fa-bars"></i>
        </a>
      </div>

    </nav>

  );
};

export default NavBar;
