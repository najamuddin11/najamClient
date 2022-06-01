import React from "react";
import "../../../../styles/main/home/sixth-section-portfolio-styles/portfolio-popup.styles.scss";
import PortfolioPopupCarousel from "./PortfolioPopupCarousel";

const PortfolioPopup = (props) => {
  const { portfolioPopupData } = props;

  return (
    <div className="portfolio_popup_inner_container">
      <div
        className="portfolio_popup_header"
        // style={{
        //   background:
        //     portfolioPopupData?.projectColor &&
        //     portfolioPopupData?.projectColor,
        // }}
      >
        <div className="portfolio_popup_title">
          {portfolioPopupData?.projectLogo ? (
            <img
              className="portfolio_popup_project_logo"
              src={portfolioPopupData?.projectLogo}
              alt=""
            />
          ) : (
            portfolioPopupData?.title
          )}
        </div>
      </div>
      <div className="portfolio_popup_body">
        <PortfolioPopupCarousel carouselData={portfolioPopupData?.carousel} />
        {portfolioPopupData?.companyBuiltWith && (
          <div className="portfolio_section_control">
            <div className="portfolio_popup_content">
              <span>{portfolioPopupData?.title} </span> was build with{" "}
              {portfolioPopupData?.companyBuiltWith} Team
            </div>
          </div>
        )}
        <div className="portfolio_section_control">
          <div className="portfolio_popup_content_title">
            About {portfolioPopupData?.title}{" "}
          </div>
          <div className="portfolio_popup_content">
            {portfolioPopupData?.desc}
            {portfolioPopupData?.moreInfoLink && (
              <span>
                {" "}
                To know more about it{" "}
                <a
                  href={portfolioPopupData?.moreInfoLink}
                  target="_blank"
                  className="link"
                  rel="noopener noreferrer"
                >
                  click here
                </a>{" "}
              </span>
            )}
          </div>
        </div>
        {portfolioPopupData?.whatIdid && (
          <div className="portfolio_section_control">
            <div className="portfolio_popup_content_title">What I did?</div>
            <div className="portfolio_popup_content">
              {portfolioPopupData?.whatIdid}

              {/* <div className="portfolio_popup_content_list">
              {portfolioPopupData?.resposibilities.map((item) => (
                <div className="portfolio_popup_content_list_item">{item}</div>
              ))}
            </div> */}
            </div>
          </div>
        )}

        <div className="portfolio_section_control">
          <div className="portfolio_popup_content_title">Skills Used</div>
          <div className="portfolio_popup_skills_container">
            {portfolioPopupData?.skills.map((item, index) => (
              <div
                key={index}
                className="portfolio_popup_skills_inner_container"
              >
                <div className="portfolio_popup_skills">{item}</div>
              </div>
            ))}
          </div>
        </div>
        {portfolioPopupData?.link && (
          <div className="portfolio_section_control">
            <div className="experience_card_content_description">
              Visit Website:{" "}
              <a
                className="link"
                href={portfolioPopupData?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {portfolioPopupData?.link}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPopup;
