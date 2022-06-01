import React from "react";
import "../../../../styles/main/home/third-section-expertise-styles/third-section.styles.scss";
import Card from "./Card.component";
const Thirdsection = (props) => {
  const {expertiseData} = props
  return (
    <div className="section_container" id="section_three">
      <div className="container">
        <h6 data-aos="fade-in" className="small_heading">
          WHAT I DO?
        </h6>
        <h4 data-aos="fade-in" className="section_title">
          HERE ARE SOME OF MY EXPERTISE
        </h4>
        <div className="section_three_card_container">
          {expertiseData?.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thirdsection;
