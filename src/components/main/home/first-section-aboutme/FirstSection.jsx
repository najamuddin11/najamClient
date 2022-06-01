import React from "react";
import "../../../../styles/main/home/first-section-aboutme-styles/first-section.styles.scss";
import Card from "./Card.component";

const Firstsection = (props) => {
  const {fieldDevelopmentData} = props
  return (
    <section className="section_one section_container" id="about">
      <div className="container">
        <h6 data-aos="fade-in" className="small_heading">
          About me
        </h6>
        <h4 data-aos="fade-in" className="section_title">
          Who Am I?
        </h4>
        <p data-aos="fade-in" className="section_one_content">
          <b> I am Najam Uddin</b>, having{" "}
          {+new Date().getFullYear() - +new Date("2018").getFullYear()}+ years
          of experience in web development. I have experience of both working as
          an individual and as a team worker in reputed firms. My passion is
          learning new technologies and implenting those skills. Further, I
          create responsive, dynamic and cross-browser web applications. My
          expertise are react, redux, next.js, node.js, express, mongoDB, html,
          css, sass, bootstrap, material design and wordpress.{" "}
          <a href="#skills" className="link" style={{ color: "var(--blue)" }}>
            click here
          </a>{" "}
          to view more skills. I'm confident, hard working, dependable, good
          team worker, and have good project management skills. I work to make
          sure my clients are completely satisfied.
        </p>
        <div className="section_one_card_container">
          {fieldDevelopmentData?.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Firstsection;
