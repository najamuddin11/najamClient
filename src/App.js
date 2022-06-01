import "./App.css";
import HomeRoute from "./routes/main/Home.route";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";
import "./styles/simple-grid.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import Toast from "./components/common/popup/Toast";
import { clearErrors } from "./state-management/actions/errors";
import axios from "axios";
import About from "./routes/main/About.route";
function App(props) {
  const { errors } = props;
  useEffect(() => {
    AOS.init();
    AOS.refreshHard();
    window.scrollTo(0, 0);
    axios
      .get("/", { withCredentials: true })
      .then((res) => {})
      .catch((err) => console.log(err.response));

    return () => {
      return props.clearErrors();
    };
  }, []);

  return (
    <>
      {errors?.param === "internalServerError" && (
        <Toast type={"error"} msg={errors?.msg} />
      )}
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}
const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, { clearErrors })(App);
