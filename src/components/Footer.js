import React from "react";

import Logo from '../assests/Logo.svg';

const Footer = () => (
  <>
    <a href='/' title='Little Lemon'>
      <img src={Logo} alt='Little Lemon Logo' />
    </a>

    <nav>
      <dl>
        <dt>Doormat Navigation</dt>
        <dd><a href='/home' title='Home'>Home</a></dd>
        <dd><a href='/about' title='About'>About</a></dd>
        <dd><a href='/Menu' title='Menu'>Menu</a></dd>
        <dd><a href='/reservations' title='Reservations'>Reservations</a></dd>
        <dd><a href='/order-online' title='Order Online'>Order Online</a></dd>
        <dd><a href='/login' title='Login'>Login</a></dd>
      </dl>

      <dl>
        <dt>Contact</dt>
        <dd>Address</dd>
        <dd>Phone</dd>
        <dd>number</dd>
        <dd>Email</dd>
      </dl>

      <dl>
        <dt>Social Media Links</dt>
        <dd><a href='/' title='Social 1'>Social 1</a></dd>
        <dd><a href='/' title='Social 2'>Social 2</a></dd>
        <dd><a href='/' title='Social 3'>Social 3</a></dd>
      </dl>
    </nav>
  </>
);

export default Footer;
