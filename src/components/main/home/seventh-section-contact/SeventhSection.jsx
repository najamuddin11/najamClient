import React, { useEffect, useState } from "react";
import "../../../../styles/main/home/seventh-section-contact-styles/seventh-section.styles.scss";
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
import { postContact } from "../../../../state-management/actions/home";
import { connect } from "react-redux";
import Toast from "../../../common/popup/Toast";

const Seventhsection = (props) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    return () => {
      setSuccess(null);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.postContact(contactForm, setContactForm, setSuccess);
  };
  const { contactData } = props;
  return (
    <section className="section_seven section_container" id="contact">
      {success && <Toast type={success.param} msg={success.msg} />}

      <div className="container">
        <h6 data-aos="fade-in" className="small_heading">
          Get in touch
        </h6>
        <h4 data-aos="fade-in" className="section_title">
          contact
        </h4>
        <div className="section_seven_conatiner">
          <div className="section_seven_container_leftCol">
            {contactData?.map((item) => (
              <ContactInfoCard {...item} key={item.id} />
            ))}
          </div>
          <div data-aos="fade-in" className="section_seven_container_rightCol">
            <ContactForm
              contactForm={contactForm}
              handleChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(null, { postContact })(Seventhsection);
