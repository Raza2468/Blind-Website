import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PrimarySearchAppBar from "./Navbar2nd";
import "./Navbar1.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.background = "rgba(0, 0, 0, 0.384)";
    } else {
      document.getElementById("header").style.background = "white";
    }
  }
  return (
    <div >
      <nav className="navbar" id="header">
        <div className="nav-container" >
          <NavLink exact to="/" className="nav-logo">
            LOGO
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Product"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Dressing"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Dressing Room
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/DiyZone"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                DiyZone
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>

            <span id="navIcon">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="far fa-user"> </i> Sign In Or Register
            </span>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

    </div>

  );
}

export default NavBar;