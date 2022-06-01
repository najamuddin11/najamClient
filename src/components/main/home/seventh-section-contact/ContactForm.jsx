import React from "react";
import { connect } from "react-redux";
import Loader from "../../../common/popup/Loader";
import InputField from "../../../form/InputField";
import TextArea from "../../../form/TextArea";
const ContactForm = (props) => {
  const { contactForm, handleChange, onSubmit, } = props;
  return (
    <div>
      {" "}
      <div className="section_seven_form">
        <div className="section_seven_form_container">
          <h2 className="contant_form_heading">Send a Message</h2>
          <InputField
            type="text"
            // icon={user}
            value={contactForm.name}
            onChange={handleChange}
            name="name"
            className="contant_form_field"
          />
          <InputField
            type="email"
            // icon={at}
            value={contactForm.email}
            onChange={handleChange}
            name="email"
            className="contant_form_field"
          />
          <InputField
            type="text"
            // icon={pen}
            value={contactForm.subject}
            onChange={handleChange}
            name="subject"
            className="contant_form_field"
          />
          <TextArea
            // icon={envelope}
            value={contactForm.message}
            onChange={handleChange}
            name="message"
            className="contant_form_text_area"
          />
          <button
            className="btn btn_bg_lightblue contant_submit_btn"
            type="submit"
            onClick={!props?.loading ? onSubmit : undefined}
            disabled={props?.loading ? true : false}
          >
            {!props?.loading ? "Send Message" : <Loader />}
          </button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.loader.loading
});
export default connect(mapStateToProps)(ContactForm);
