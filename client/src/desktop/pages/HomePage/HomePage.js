import React from "react";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import Intro from "../../modules/customers/Intro";

function HomePage(props) {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
