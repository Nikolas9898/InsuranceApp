import React from "react";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import Intro from "../../modules/intro/Intro";
// import { useUser } from "../../context/ThemeContext";

function HomePage(props) {
  // const user = useUser();

  // console.log(user);

  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
