import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

const TextArea = (props) => {
  const { type, icon, value, onChange, name, className, errors } = props;
  const [showLabel, setShowLabel] = useState(false);
  const [validationErrors, setValidationErrors] = useState(null);

  useEffect(() => {
    if (value.length > 0) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  }, [value]);

  useEffect(() => {
    if (errors && errors?.validationErrors && errors?.validationErrors[name]) {
      setValidationErrors(errors?.validationErrors[name]);
    }

    return () => {
      setValidationErrors(null);
    };
  }, [errors]);
  const handleValue = (e) => {
    if (e.target.value.length > 0) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  };
  const inputLabel = useRef();
  return (
    <div className="form_control">
      <label
        className={`input_label ${
          showLabel ? "show_input_label" : "hide_input_label"
        }`}
        htmlFor={name}
        style={{ color: validationErrors && "red" }}
        ref={inputLabel}
      >
        {name}
      </label>
      {/* <img src={icon} alt="" className="section_seven_form_icon" /> */}
      <textarea
        rows={6}
        className={`text_area ${className}`}
        style={{ border: validationErrors && "1px solid red" }}
        type={type}
        placeholder={name}
        onChange={onChange}
        value={value}
        id={name}
        name={name}
        onBlur={(e) => {
          handleValue(e);
        }}
        onFocus={(e) => {
          setShowLabel(true);
        }}
      />
      {validationErrors && (
        <div className="input_error">{validationErrors}</div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps)(TextArea);
