import React, { Fragment } from "react";
import "../../../../styles/main/home/fifth-section-experience-styles/fifth-section.styles.scss";
import ExperienceCards from "./ExperienceCards";

const Fifthsection = (props) => {
  const {experienceData} = props
  return (
    <div className="section_five section_container" id="experience">
      <div className="container">
        <h6 data-aos="fade-in" className="small_heading">
          EXPERIENCE
        </h6>
        <h4 data-aos="fade-in" className="section_title">
          WORK EXPERIENCE
        </h4>
        <div className="section_five_experience_cards_container">
          {experienceData?.map((item, index) => (
            <Fragment key={index}>
              <ExperienceCards experienceData={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fifthsection;
