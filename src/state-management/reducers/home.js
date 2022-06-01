import { HOME_DATA } from "../types/types";

const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default homeReducer;
