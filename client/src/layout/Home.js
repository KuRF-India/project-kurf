import React from "react";
import Header from "./Header";
import Content from "../Component/Content";
import Objective from "../Component/Objective";
import Articles from "../Component/Articles";
import About from "../Component/About";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Content />
      <Objective />

      <Articles />

      <About />
      <Footer />
    </>
  );
};

export default Home;
