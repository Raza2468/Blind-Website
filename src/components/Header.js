import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "./Header.css";

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
      <div>
        <br />
        <br />
        <br />
        {/* <br /> */}
        {/* 2ndNavbar */}
        <div class="topnav">
          {/* <a class="active" href="#home">Home</a> */}
          <i class="fa fa-bars"></i>
          search by categary
          <div class="search-container">

            <input type="text" placeholder="Search.." name="search" />
            <button type="submit"><i class="fa fa-search"></i></button>

            <i class="fa fa-search"></i>
            <i class="far fa-heart"></i>
            <i class="fa fa-shopping-cart"></i>
          </div>
        </div>




        <br />
        {/* Slider */}
        <div id="carouselExampleTouch" class="carousel slide" data-mdb-touch="false">
          <div class="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselExampleTouch"
              data-mdb-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleTouch"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselExampleTouch"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://mdbootstrap.com/img/new/slides/041.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://mdbootstrap.com/img/new/slides/042.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://mdbootstrap.com/img/new/slides/043.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleTouch"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleTouch"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <div id="text">
     
        A
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
        A
        A
        A
        A
        A
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        A
        <br />
        A
        <br />
        A
        <br />
      
        <br />
      </div>
    */}

    </div>

  );
}

export default NavBar;