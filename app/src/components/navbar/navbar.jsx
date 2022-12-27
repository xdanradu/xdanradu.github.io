import React, { Component } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import Checkout from '../checkout/checkout';
import Logo from '../../components/logo/logo';
import { SmallIcon } from '../icons/small-icon';
import { BarsIcon } from '../icons/bars-icon';
import { LinkedinIcon } from '../icons/linkedin-icon';
import { GithubIcon } from '../icons/github-icon';
import Theme from "../theme/theme";
import {observer} from "mobx-react-lite";

function toggle(e) {
  var topnav = document.getElementById('myTopnav');
  if (topnav.className === 'topnav') {
    topnav.className += ' responsive';
  } else {
    topnav.className = 'topnav';
  }
}

const NavBar = observer(({ store }) => (
    <nav>
      <div className="topnav" id="myTopnav">
        <div className="topnav-logo">
          <Logo />
        </div>

        <NavLink
            exact={true}
            to="/"
            activeclassname="active"
            onClick={e => toggle(e)}
        >
          Home
        </NavLink>
        <NavLink
            to="/shop"
            activeclassname="active"
            onClick={e => toggle(e)}
        >
          Hire me
        </NavLink>

        <div className="badge-pill">
          <Checkout
              store={store}
          />
        </div>

        <Theme />

        <div className="description">
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
    </nav>


));




export default NavBar;
