import axios from "axios";
import { homeData } from "../../helper/helper";
import { GET_ERRORS, HOME_DATA } from "../types/types";
import { clearErrors } from "./errors";
import { startLoading, stopLoading } from "./loader";

export const getHomeData = () => (dispatch) => {
  dispatch({ type: HOME_DATA, payload: homeData });
};

export const postContact =
  (contactForm, setContactForm, setSuccess) => (dispatch) => {
    dispatch(startLoading());
    dispatch(clearErrors());
    setSuccess(null);
    axios
      .post("/send", contactForm, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(stopLoading());
        setSuccess(res.data);
        setContactForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        dispatch(stopLoading());
        if (err.response.status === 500) {
          setContactForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
        dispatch({ type: GET_ERRORS, payload: err.response });
      });
  };
