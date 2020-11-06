import React, { Component } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import Checkout from '../checkout/checkout';
import Logo from '../../components/logo/logo';
import { SmallIcon } from '../icons/small-icon';
import { BarsIcon } from '../icons/bars-icon';

const darkTheme = {
  primaryColor: '#222',
  secondaryColorDarker: '#111',
  secondaryColorDark: '#222',
  secondaryColorLight: '#818181',
  secondaryColorLighter: '#ccc',
  firstAccentColor: '#7dba5c',
  firstAccentColorDark: '#539149',
  secondAccentColor: '#ffca28',
  tableOdd: '#ff000055',
  tableEven: '#00ff0055'
};

const lightTheme = {
  primaryColor: '#efefef',
  secondaryColorDarker: '#ddd',
  secondaryColorDark: '#eeeeee',
  secondaryColorLight: '#111111',
  secondaryColorLighter: '#282828',
  firstAccentColor: '#bb0000',
  firstAccentColorDark: '#bb0000',
  secondAccentColor: '#1292d5',
  tableOdd: '#ddd',
  tableEven: '#efefef'
};

class NavBar extends Component {
  // const NavBar = ({ counters, onDecrement, onIncrement, onReset }) => {

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
    this.setTheme('light');
  }

  setTheme(option) {
    let theme = darkTheme;
    if (option === 'light') {
      theme = lightTheme;
      document.getElementById('dark-theme').className = 'btn btn-dark';
      document.getElementById('light-theme').className = 'btn btn-light active';
    } else {
      document.getElementById('dark-theme').className = 'btn btn-dark active';
      document.getElementById('light-theme').className = 'btn btn-light';
    }
    document.documentElement.style.setProperty(
      '--primary-color',
      theme.primaryColor
    );
    document.documentElement.style.setProperty(
      '--secondary-color-darker',
      theme.secondaryColorDarker
    );
    document.documentElement.style.setProperty(
      '--secondary-color-dark',
      theme.secondaryColorDark
    );
    document.documentElement.style.setProperty(
      '--secondary-color-light',
      theme.secondaryColorLight
    );
    document.documentElement.style.setProperty(
      '--secondary-color-lighter',
      theme.secondaryColorLighter
    );
    document.documentElement.style.setProperty(
      '--first-accent-color',
      theme.firstAccentColor
    );
    document.documentElement.style.setProperty(
      '--first-accent-color-dark',
      theme.firstAccentColorDark
    );
    document.documentElement.style.setProperty(
      '--second-accent-color',
      theme.secondAccentColor
    );
    document.documentElement.style.setProperty('--table-odd', theme.tableOdd);
    document.documentElement.style.setProperty('--table-even', theme.tableEven);
  }

  toggle(e) {
    //e.preventDefault();
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
            to="/skills"
            activeclassname="active"
            onClick={e => this.toggle(e)}
          >
            Skills
          </NavLink>
          <NavLink
            to="/shop"
            activeclassname="active"
            onClick={e => this.toggle(e)}
          >
            Shop
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
          </a>

          <div className="theme">
            <button
              id="dark-theme"
              className="btn btn-dark active"
              onClick={() => this.setTheme('dark')}
            >
              {' '}
            </button>
            <button
              id="light-theme"
              className="btn btn-light"
              onClick={() => this.setTheme('light')}
            >
              {' '}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
