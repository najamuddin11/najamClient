import React from "react";
import "../../../../styles/main/home/first-section-aboutme-styles/card.styles.scss";
const Card = (props) => {
  const { content, borderColor, icon } = props;
  return (
    <div data-aos="fade-up" className="section_one_card">
      <div className="section_one_card_inner">
        <div>
          <img src={icon} className="section_one_icon" />
        </div>
        <div className="section_one_card_content_container">
          <div className="section_one_card_content">
            {content}
            <br />
            Developer
          </div>
        </div>
      </div>
      <div
        className="section_one_card_border_bottom"
        // style={{ backgroundColor: borderColor }}
      ></div>
    </div>
  );
};

export default Card;
