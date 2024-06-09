import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!isMenuOpen);
  };

  return (
    <nav {...(isMenuOpen && { className: "open" })}>
      {/** Mobile navigation */}
      <div id="navbar" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/** Navigation items */}
      <ul>
        <li>
          <a href="/" title="Home">
            Home
          </a>
        </li>
        <li>
          <a href="/about" title="About">
            About
          </a>
        </li>
        <li>
          <a href="/Menu" title="Menu">
            Menu
          </a>
        </li>
        <li>
          <a href="/reservations" title="Reservations">
            Reservations
          </a>
        </li>
        <li>
          <a href="/testimonials" title="Testimonials">
            Testimonials
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
