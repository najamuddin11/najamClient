import React, { useEffect, useState } from "react";
import "../../../../styles/main/home/sixth-section-portfolio-styles/sixth-section.styles.scss";
import PortfolioCardComponent from "./PortfolioCardComponent";
import { scrollSmoothTo } from "../../../../hooks/scrollTo";
import arrowIcon from "../../../../assets/icons/chevron-right-white.svg";
const Sixthsection = (props) => {
  const { handlePortfolioPopup, handlePortfolioPopupData, portfolioData } =
    props;
  const [activeState, setActiveState] = useState("");
  const status = ["", "live", "underdevelopment"];
  const [currentItems, setCurrentItems] = useState(0);
  const [activeCards, setActiveCards] = useState(null);

  useEffect(() => {
    let temp = [];
    if (portfolioData) {
      portfolioData?.forEach((item, index) => {
        if (item.status.includes(activeState)) {
          temp.push(item);
        }
      });
      setActiveCards(temp);
    }
    return () => {
      setCurrentItems(0);
    };
  }, [activeState, portfolioData]);

  const renderFilteredCards = () => {
    let temp = [];
    let limit = 0;
    for (let i = currentItems; i < activeCards?.length; i++) {
      if (limit < 6) {
        temp.push(
          <PortfolioCardComponent
            key={activeCards[i].id}
            item={activeCards[i]}
            handlePortfolioPopup={handlePortfolioPopup}
            handlePortfolioPopupData={handlePortfolioPopupData}
          />
        );
        limit++;
      }
    }
    return temp;
  };
  const renderPaginationNumbers = () => {
    let temp = [];
    for (let i = 1; i <= activeCards?.length / 6 + 1; i++) {
      temp.push(
        <div
          key={i}
          onClick={() => {
            setCurrentItems((i - 1) * 6);
            scrollSmoothTo("portfolio_cards", {
              scrollMarginTop: "55px",
            });
          }}
          className={`portfolio_cards_pagination_numbers ${
            currentItems / 6 + 1 === i &&
            "portfolio_cards_pagination_numbers_active"
          }`}
        >
          {i}
        </div>
      );
    }
    return temp;
  };
  const renderPagination = () => {
    return (
      <div>
        {activeCards?.length > 6 && (
          <div className="portfolio_cards_pagination_container">
            <div
              className={`portfolio_cards_prev ${
                currentItems === 0 && `portfolio_cards_btn_disabled`
              }`}
              onClick={
                currentItems !== 0
                  ? () => {
                      setCurrentItems((prev) => prev - 6);
                      scrollSmoothTo("portfolio_cards", {
                        scrollMarginTop: "55px",
                      });
                    }
                  : undefined
              }
            >
              <span className="portfolio_cards_pagination_navigation"></span>
              <img
                className="portfolio_cards_pagination_chevron"
                src={arrowIcon}
                style={{ transform: "rotate(180deg)" }}
                alt=""
              />{" "}
            </div>
            <div className="portfolio_cards_pagination_number_container">
              {renderPaginationNumbers()}
            </div>
            <div
              className={`portfolio_cards_next ${
                activeCards?.length < currentItems + 6 &&
                `portfolio_cards_btn_disabled`
              }`}
              onClick={
                activeCards?.length > currentItems + 6
                  ? () => {
                      setCurrentItems((prev) => prev + 6);
                      scrollSmoothTo("portfolio_cards", {
                        scrollMarginTop: "55px",
                      });
                    }
                  : undefined
              }
            >
              {" "}
              <img
                className="portfolio_cards_pagination_chevron"
                src={arrowIcon}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="section_six section_container" id="portfolio">
      <div className="container">
        <h6 data-aos="fade-in" className="small_heading">
          MY WORK
        </h6>
        <h4 data-aos="fade-in" className="section_title">
          RECENT WORK
        </h4>
        <div
          data-aos="fade-in"
          className="section_six_content_container"
          id="portfolio_cards"
        >
          {status.map((item, index) => (
            <div
              className={`section_six_content ${
                activeState === item && `section_six_content_acitve`
              }`}
              onClick={() => setActiveState(item)}
              key={index}
            >
              {item === "" ? "all" : item}
            </div>
          ))}
        </div>
        {activeCards && (
          <>
            <div className="section_six_image_container">
              {activeState && renderFilteredCards()}
              {!activeState && renderFilteredCards()}
            </div>
            {renderPagination()}
          </>
        )}
      </div>
    </section>
  );
};

export default Sixthsection;
