import React, { Component } from 'react';
import './theme.scss';
import { lightTheme, darkTheme } from './themes.colors';

class Theme extends Component {
  componentDidMount() {
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
    document.documentElement.style.setProperty(
      '--success-color',
      theme.successColor
    );
    document.documentElement.style.setProperty('--table-odd', theme.tableOdd);
    document.documentElement.style.setProperty('--table-even', theme.tableEven);
  }

  render() {
    return (
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
    );
  }
}

export default Theme;
