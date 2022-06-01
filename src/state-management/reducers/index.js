import { combineReducers } from "redux";
import homeData from "./home";
import errors from "./error";
import loader from './loader'
export default combineReducers({
  homeData,
  errors,
  loader,
});
