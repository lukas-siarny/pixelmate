import React from "react";
import Topbar from "../../components/Topbar";
import AboutUs from "./AboutUs";
import Clients from "./Clients";
import Header from "./Header";
import "./style.scss";

const Homepage: React.FC = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Clients />
      <AboutUs />
    </>
  );
};

export default Homepage;
