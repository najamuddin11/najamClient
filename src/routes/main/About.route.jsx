import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import Firstsection from "../../components/main/home/first-section-aboutme/FirstSection";
import Secondsection from "../../components/main/home/second-section-education/SecondSection";
import Thirdsection from "../../components/main/home/third-section-expertise/ThirdSection";

const About = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Footer />
    </div>
  );
};

export default About;
