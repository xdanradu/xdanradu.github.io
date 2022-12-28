import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import Checkout from '../checkout/checkout';
import Logo from '../../components/logo/logo';
import Theme from '../theme/theme';
import { observer } from 'mobx-react-lite';
import loadStore from '../../mobx-store/StoreService';
import SocialIcons from '../social-icons/social-icons';
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
      <NavLink to="/shop" activeclassname="active" onClick={e => toggle(e)}>
        Hire me
      </NavLink>

      <div className="badge-pill">
        <Checkout store={store} />
      </div>

      <Theme />

      <SocialIcons />
    </div>
  </nav>
));

export default NavBar;
