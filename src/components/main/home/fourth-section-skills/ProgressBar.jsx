import React from "react";
import "../../../../styles/main/home/forth-section-skills-styles/progress-bar.styles.scss";

const Progressbar = (props) => {
  const { bgColor, title, progress } = props;
  return (
    <div className="section_four_progressbar_inner_container">
      <div className="section_four_progressbar_content_container">
        <div
          data-aos="fade-in"
          data-aos-offset="80"
          className="section_four_progressbar_content"
        >
          {title}
        </div>
        <div
          data-aos="fade-in"
          data-aos-offset="80"
          className="section_four_progressbar_content"
        >
          {progress}%
        </div>
      </div>
      <div className="section_four_progressbar">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="40"
          style={{
            background: `linear-gradient(to right,  ${bgColor}66 , ${bgColor}ff)`,
            width: `${progress}%`,
          }}
          className="section_four_progressbar_width"
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;
