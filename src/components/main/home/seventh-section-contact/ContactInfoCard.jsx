import React from "react";
import "../../../../styles/main/home/seventh-section-contact-styles/contact-info-card.styles.scss";

const ContactInfoCard = (props) => {
  const { text, icon } = props;
  return (
    <div data-aos="fade-up" className="section_seven_contact_container">
      <div className="section_seven_icon_container">
        <img className="section_seven_icon" src={icon} alt="" />
      </div>
      <div className="section_seven_contact_content_container">
        {text.map((item) => (
          <div className="section_seven_contact_content">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCard;
