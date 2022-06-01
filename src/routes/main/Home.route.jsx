import React from "react";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import Home from "../../pages/main/Home";

const HomeRoute = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default HomeRoute;
