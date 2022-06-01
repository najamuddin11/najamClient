import React, { useEffect, useRef, useState } from "react";
import Popup from "../../components/common/popup/Popup.component";
import Fifthsection from "../../components/main/home/fifth-section-experience/FifthSection";
import Firstsection from "../../components/main/home/first-section-aboutme/FirstSection";
import Forthsection from "../../components/main/home/fourth-section-skills/ForthSection";
import Header from "../../components/header/Header";
import Secondsection from "../../components/main/home/second-section-education/SecondSection";
import Seventhsection from "../../components/main/home/seventh-section-contact/SeventhSection";
import PortfolioPopup from "../../components/main/home/sixth-section-portfolio/PortfolioPopup.component";
import Sixthsection from "../../components/main/home/sixth-section-portfolio/SixthSection";
import Thirdsection from "../../components/main/home/third-section-expertise/ThirdSection";
import { getHomeData } from "../../state-management/actions/home";
import { connect } from "react-redux";
import Toast from "../../components/common/popup/Toast";

const Home = (props) => {
  const [portfolioPopupShow, setPortfolioPopupShow] = useState(false);
  const handlePortfolioPopup = () => {
    setPortfolioPopupShow((prev) => !prev);
  };
  const [portfolioPopupData, setPortfolioPopupData] = useState();
  const handlePortfolioPopupData = (data) => {
    setPortfolioPopupData(data);
  };

  const portfolioPopup = useRef();

  useEffect(() => {
    props.getHomeData();
  }, []);
  useEffect(() => {
    if (portfolioPopupShow) {
      // portfolioPopup.current.style.display = "block";
      document.body.style.overflowY = "hidden";
    } else {
      // portfolioPopup.current.style.display = "none";

      document.body.style.overflowY = "auto";
    }
  }, [portfolioPopupShow]);

  return (
    <div>
      <div ref={portfolioPopup}>
        {portfolioPopupShow && (
          <Popup handlePopup={handlePortfolioPopup}>
            <PortfolioPopup portfolioPopupData={portfolioPopupData} />
          </Popup>
        )}
      </div>

      <Header />
      <Firstsection
        fieldDevelopmentData={props.homeData?.fieldDevelopmentData}
      />
      <Secondsection educationData={props.homeData?.educationData} />
      <Thirdsection expertiseData={props.homeData?.expertiseData} />
      <Forthsection skillsData={props.homeData?.skillsData} />
      <Fifthsection experienceData={props.homeData?.experienceData} />
      <Sixthsection
        handlePortfolioPopup={handlePortfolioPopup}
        handlePortfolioPopupData={handlePortfolioPopupData}
        portfolioData={props.homeData?.portfolioData}
      />
      <Seventhsection contactData={props.homeData?.contactData} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  homeData: state.homeData,
});
export default connect(mapStateToProps, { getHomeData })(Home);
