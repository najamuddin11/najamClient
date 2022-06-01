import React, { useEffect, useRef, useState } from "react";
import "../../styles/layout/nav-bar.styles.scss";
import facebookIcon from "../../assets/icons/facebook-f-brands.svg";
import linkedin from "../../assets/icons/linkedin-in-brands.svg";
import github from "../../assets/icons/github.svg";

import barIcon from "../../assets/icons/bars-solid.svg";
import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", getWindowHeight);
  });
  const getWindowHeight = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollableOn = 10;
    //Now In the condition change the state to smaller so if the condition is true it will change to smaller otherwise to default state
    if (distanceY > isScrollableOn) {
      setIsScrollable(false);
    } else {
      setIsScrollable(true);
    }
  };
  const mobileMenu = useRef();

  useEffect(() => {
    if (toggleMenu) {
      mobileMenu.current.style.display = "block";
    } else {
      mobileMenu.current.style.display = "none";
    }
  }, [toggleMenu]);

  return (
    <div
      className="navbar_container"
      style={{
        height: isScrollable ? "80px" : "70px",
        background: isScrollable ? "rgba(0,0,0,0)" : "#141414",
      }}
    >
      <div className="container nav">
        <div style={{ display: "flex" }}>
          <a href="/" className="nav_anchor brand">
            <img src={logo} alt="" srcSet="" />
          </a>
          <div className="nav_items_container">
            <a href="#" className="nav_anchor nav_links">
              Home
            </a>
            <a href="#about" className="nav_anchor nav_links">
              About
            </a>
            <a href="#portfolio" className="nav_anchor nav_links">
              Portfolio
            </a>
            <a href="#contact" className="nav_anchor nav_links">
              Contact
            </a>
          </div>
        </div>
        <div className="follow_links">
          {/* <span className="nav_anchor" style={{mr}}>Follow me</span> */}
          <a href="https://www.facebook.com/Najam.Uddin.13/" target="_blank">
            <img src={facebookIcon} alt="facebook-icon" className="nav_icon" />
          </a>

          <a href="https://github.com/najamuddin11" target="_blank">
            <img src={github} alt="github-icon" className="nav_icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/najam-uddin-6641741ab/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin-icon" className="nav_icon" />
          </a>
        </div>
        <div className="hamburger_menu">
          <img
            src={barIcon}
            alt="menu-icon"
            className="nav_icon"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          <div className="mobile_menu_container" ref={mobileMenu}>
            <div
              className="close_nav"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              &times;
            </div>
            <a
              href="#"
              className="nav_anchor"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Home
            </a>
            <div className="splitter" />
            <a
              href="#about"
              className="nav_anchor"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              About
            </a>
            <div className="splitter" />
            <a
              href="#portfolio"
              className="nav_anchor"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Portfolio
            </a>
            <div className="splitter" />
            <a
              href="#contact"
              className="nav_anchor"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Contact
            </a>
            <div className="splitter" />
            <div className="follow_links_mobile">
              <div className="nav_anchor">Follow me</div>
              <div>
                <a href="https://www.facebook.com/Najam.Uddin.13/">
                  <img
                    src={facebookIcon}
                    alt="facebook-icon"
                    className="nav_icon"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/najamuddin11">
                  <img src={github} alt="github-icon" className="nav_icon" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/najam-uddin-6641741ab/">
                  <img
                    src={linkedin}
                    alt="linkedin-icon"
                    className="nav_icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
