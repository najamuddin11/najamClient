import { CLEAR_ERRORS } from "../types/types";

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
