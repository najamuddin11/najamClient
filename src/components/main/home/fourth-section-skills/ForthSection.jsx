import React from "react";
import "../../../../styles/main/home/forth-section-skills-styles/forth-section.styles.scss";
import Progressbar from "./ProgressBar";

const Forthsection = (props) => {
  const {skillsData} = props
  return (
    <div className="section_four section_container" id="skills">
      <div className="container">
        <h6 data-aos="fade-in" className="small_heading">
          MY SPECIALTY
        </h6>
        <h4 data-aos="fade-in" className="section_title">
          MY SKILLS
        </h4>
        <div className="section_four_progress_container">
          {skillsData?.map((item) => (
            <Progressbar {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forthsection;
