import React from "react";
import "../../../styles/common/toast.scss";
const Toast = (props) => {
  const { type, msg, param } = props;
  return (
    <div className={`msg_toast toast_${type}`}>
      {/* <span className={`msg_toast_type msg_toast_type_${type}`}>
        {" "}
        {param} &nbsp; - &nbsp;{" "}
      </span> */}
      {msg}
    </div>
  );
};

export default Toast;
