import React from "react";
import "./Navbar.scss";

import { images } from "../../constants";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src="" alt="LOGO HERE" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Skills", "Work", "Contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
