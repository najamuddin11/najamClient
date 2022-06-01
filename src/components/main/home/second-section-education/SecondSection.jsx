import React from "react";
import "../../../../styles/main/home/second-section-education-styles/second-section.styles.scss";
import Card from "./Card.component";

const Secondsection = (props) => {
  const { educationData } = props;
  return (
    <div className="section_two section_container">
      <div className="container section_two_container">
        <h6 data-aos="fade-in" className="small_heading">
          Education
        </h6>
        <h4 data-aos="fade-in" className="section_title">
          Education
        </h4>
        <div className="section_two_cards_container">
          {educationData?.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
