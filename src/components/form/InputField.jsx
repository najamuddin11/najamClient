import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

const InputField = (props) => {
  const { type, value, onChange, name, className, errors } = props;
  const [validationErrors, setValidationErrors] = useState(null);
  const [showLabel, setShowLabel] = useState(false);
  const inputLabel = useRef();

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
  return (
    <div className="form_control">
      <label
        className={`input_label ${
          showLabel ? "show_input_label" : "hide_input_label"
        }`}
        style={{ color: validationErrors && "red" }}
        htmlFor={name}
        ref={inputLabel}
      >
        {name}
      </label>

      {/* <img src={icon} alt="" className="section_seven_form_icon" /> */}
      <input
        className={`input_field ${className}`}
        type={type}
        onChange={onChange}
        id={name}
        value={value}
        style={{
          border: validationErrors && "1px solid red",
        }}
        name={name}
        onFocus={(e) => {
          setShowLabel(true);
        }}
        onBlur={(e) => handleValue(e)}
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
export default connect(mapStateToProps)(InputField);
