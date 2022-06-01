import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

import "swiper/css/bundle";

import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.baseURL = "http://launchave3.zeeshankarim.com/najamapi";

// axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-Type"] = "application/json";

// axios.interceptors.request.use(
//   (request) => {
//     console.log(request);
//     // Edit request config
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response) => {
//     // Edit response config
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
