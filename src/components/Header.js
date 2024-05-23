import React from "react";

import Logo from "../assests/Logo.svg";
import Nav from "./Nav";

const Header = () => (
  <header className="container centerContainer">
    <a href="/" title="Little Lemon">
      <img src={Logo} alt="Little Lemon Logo" width="200px" />
    </a>
    <Nav />
  </header>
);

export default Header;
