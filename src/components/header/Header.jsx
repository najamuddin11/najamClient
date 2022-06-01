import React from "react";
import "../../styles/header-styles/header.styles.scss";
import download from "../../assets/icons/arrow-down-to-bracket.svg";
import bookmark from "../../assets/icons/bookmark.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_container">
      <div className="container">
        <div className="header_inner_container">
          <div data-aos="fade-in" className="header_inner_container_left_col">
            <h1>Najam Uddin</h1>
            <h2>I am a Web Developer</h2>
            <div className="header_inner_container_left_col_btn_container">
              <a href="/NajamCV.pdf" download>
                <button className="btn header_downloadCv_btn">
                  <img src={download} alt="" />
                  Download CV
                </button>
              </a>
              <a href="#portfolio">
                <button className="btn header_viewPortfolio_btn">
                  <img src={bookmark} alt="" />
                  View Portfolio
                </button>
              </a>
            </div>
          </div>
          <div data-aos="fade-in" className="header_inner_container_right_col">
            <div className="header_inner_container_right_col_img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
