import React, { useEffect, useRef, useState } from "react";
import "../../../../styles/main/home/fifth-section-experience-styles/experience-card.scss";
import chevron from "../../../../assets/icons/chevron-down.svg";
import AOS from "aos";

const ExperienceCards = (props) => {
  const { experienceData } = props;
  const [toggleDropdown, setDoggleDropdown] = useState(false);
  const [activeCard, setActiveCard] = useState();
  const handleDropDownToggle = () => {
    setDoggleDropdown(!toggleDropdown);
  };
  const dropDownContent = useRef();

  useEffect(() => {
    if (toggleDropdown) {
      dropDownContent.current.classList.add(
        "section_five_experience_card_content_open"
      );
      dropDownContent.current.classList.remove(
        "section_five_experience_card_content_close"
      );
    } else {
      dropDownContent.current.classList.add(
        "section_five_experience_card_content_close"
      );
      dropDownContent.current.classList.remove(
        "section_five_experience_card_content_open"
      );
    }
    AOS.refreshHard();
  }, [toggleDropdown, activeCard]);

  return (
    <div data-aos="fade-up">
      <div
        className={`section_five_experience_card ${
          toggleDropdown && "section_five_experience_card_active"
        }`}
        onClick={handleDropDownToggle}
      >
        <div className="experience_card_title">
          <img
            src={experienceData.icon}
            className="experience_card_company_logo"
            alt=""
          />
          <div className="experience_card_company_name">
            {experienceData.company}
          </div>{" "}
          <span className="experience_card_divider"> | </span>
          <div className="experience_card_my_role">
            {experienceData.designation}{" "}
            <span className="experience_card_company_name_mobile">
              at {experienceData.company}{" "}
              <span className="experience_card_work_duration_mobile">
                {" "}
                ({experienceData.duration})
              </span>
            </span>
          </div>
          <span className="experience_card_work_duration">
            ({experienceData.duration})
          </span>
        </div>
        <span className="dropdown_icon" onClick={handleDropDownToggle}>
          <img
            src={chevron}
            alt=""
            style={{
              transform: toggleDropdown && "rotate(-180deg)",
              transition: "0.3s",
            }}
          />
        </span>
      </div>
      <div
        ref={dropDownContent}
        className="section_five_experience_card_content"
      >
        <div>
          <div className="experience_card_content_control">
            <div className="experience_card_content_title">
              Company Description{" "}
            </div>
            <div className="experience_card_content_description">
              {experienceData.companyDescription}
            </div>
          </div>
          <div className="experience_card_content_control">
            <div className="experience_card_content_title">What I Did?</div>
            <div className="experience_card_content_description">
              {experienceData.whatIdid}
            </div>
          </div>
          <div className="experience_card_content_control">
            <div className="experience_card_content_title">Skills Used</div>
            <div className="experience_card_content_description experience_card_content_skill_container">
              {experienceData.skillsUsed.map((item, index) => (
                <div key={index} className="experience_card_content_skill_tag">
                  {item}
                </div>
              ))}
            </div>
          </div>
          {experienceData.companySite && (
            <div className="experience_card_content_control">
              <div className="experience_card_content_description">
                Website:{" "}
                <a
                  className="link"
                  href={experienceData.companySite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experienceData.companySite}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCards;
