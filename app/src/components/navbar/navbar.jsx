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

class NavBar extends Component {
  componentDidMount() {
    let prevScrollpos = window.pageYOffset;
    prevScrollpos = 20;

    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('myTopnav').style.top = '0';
      } else {
        document.getElementById('myTopnav').style.top = '-70px';
      }
      prevScrollpos = currentScrollPos;

      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        document.getElementById('bottom-menu').style.bottom = '0px';
      } else {
        document.getElementById('bottom-menu').style.bottom = '-30px';
      }
    };
  }

  toggle(e) {
    var topnav = document.getElementById('myTopnav');
    if (topnav.className === 'topnav') {
      topnav.className += ' responsive';
    } else {
      topnav.className = 'topnav';
    }
  }

  render() {
    let { counters, onDecrement, onIncrement, onReset, onCleared } = this.props;
    return (
      <nav>
        <div className="topnav" id="myTopnav">
          <div className="topnav-logo">
            <Logo />
          </div>

          <NavLink
            exact={true}
            to="/"
            activeclassname="active"
            onClick={e => this.toggle(e)}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            activeclassname="active"
            onClick={e => this.toggle(e)}
          >
            Hire me
          </NavLink>

          <div className="badge-pill">
            <Checkout
              key="checkout"
              counters={counters}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              onReset={onReset}
              onCleared={onCleared}
            />
          </div>

          <a id="breadcrumb" onClick={e => this.toggle(e)} className="icon">
            <SmallIcon icon={BarsIcon} />
            <div>x</div>
          </a>

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
    );
  }
}

export default NavBar;
