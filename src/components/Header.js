import React from "react";

import Logo from '../assests/Logo.svg';
import Nav from './Nav';

const Header = () => (
  <React.Fragment>
    <a href='/' title='Little Lemon'>
      <img src={Logo} alt='Little Lemon Logo' />
    </a>
    <Nav />
  </React.Fragment>
);

export default Header;