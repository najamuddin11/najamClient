import React from "react";
import "../../styles/layout/footer.css";
import logo from "../../assets/logo/logo-lg.svg";
import facebookIcon from "../../assets/icons/facebook-f-brands.svg";
import github from "../../assets/icons/github.svg";
import linkedInIcon from "../../assets/icons/linkedin-in-brands.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container footer_container">
          <img src={logo} alt="logo" />
          <div className="footer_inner_container">
            <div className="footer_content_container footer_content">
              Web developer with{" "}
              {+new Date().getFullYear() - +new Date("2018").getFullYear()}+
              year experience in web development. I have experience of both
              working as an individual and as a team worker in reputed firms. My
              passion is learning new technologies and implenting those skills.
            </div>
            <div className="footer_content_container">
              <h4 className="footer_content_title">Why me?</h4>
              <div className="footer_content">
                I'm confident, hard working, dependable, good team worker, and
                have good project management skills. I work to make sure my
                clients are completely satisfied.
              </div>
            </div>
            <div className="footer_social_icon_container">
              <a
                className="footer_social_icon_link"
                href="https://www.facebook.com/Najam.Uddin.13/"
                target="_blank"
              >
                <img className="" src={facebookIcon} alt="facebook-icon" />
              </a>
              <a
                className="footer_social_icon_link"
                href="https://github.com/najamuddin11"
                target="_blank"
              >
                <img src={github} alt="github-icon" />
              </a>
              <a
                className="footer_social_icon_link"
                href="https://www.linkedin.com/in/najam-uddin-6641741ab/"
                target="_blank"
              >
                <img src={linkedInIcon} alt="linkedin-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="footer_copyright_text_content">
          &copy; {new Date().getFullYear()} Najam. All Rights Reserved. Designed
          by najam
        </div>
      </div>
    </>
  );
};

export default Footer;
