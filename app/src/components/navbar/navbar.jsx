import React, { Component } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import Checkout from '../checkout/checkout';
import Logo from '../../components/logo/logo';
import { LinkedinIcon } from '../icons/linkedin-icon';
import { GithubIcon } from '../icons/github-icon';
import Theme from "../theme/theme";
import {observer} from "mobx-react-lite";
import loadStore from "../../mobx-store/StoreService";
const store = loadStore();

function toggle(e) {
  let topNav = document.getElementById('myTopnav');
  if (topNav.className === 'topnav') {
    topNav.className += ' responsive';
  } else {
    topNav.className = 'topnav';
  }
}

const NavBar = observer(() => (
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
