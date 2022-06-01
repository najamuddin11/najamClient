import { useEffect, useRef } from "react";
import "../../../styles/common/popup/PopUp.styles.scss";

const Popup = (props) => {
  function closeModalDone(e) {
    e.stopPropagation();
    props.handlePopup();
  }
  const popup = useRef();
  useEffect(() => {
    return () => {
      // document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="popup" onClick={closeModalDone} ref={popup}>
      <div className="popup_content" onClick={(e) => e.stopPropagation()}>
        <div className="popup_content_container">
          <div className="popup_close" onClick={closeModalDone}>
            &times;
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
