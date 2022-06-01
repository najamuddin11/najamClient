import { CLEAR_ERRORS, GET_ERRORS } from "../types/types";

const initialState = {
  errors: {},
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      if (action.payload.status === 403) {
        return {
          ...state,
          errors: {
            param: "internalServerError",
            msg: "Internal Server Error, Please refresh and try again",
          },
        };
      }
      return {
        ...state,
        errors: action.payload.data,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      };
    default:
      return state;
  }
};
export default errorReducer;
