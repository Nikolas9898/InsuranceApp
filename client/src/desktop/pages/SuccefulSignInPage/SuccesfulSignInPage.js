import React from "react";
import PropTypes from "prop-types";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import SuccesfulSignInPageStyle from "./SuccessfullySignInPage.module.css";

function SuccesfulSignInPage(props) {
  return (
    <React.Fragment>
      <Header />

      <h1 className={SuccesfulSignInPageStyle.success}>
        Successfully registered!
      </h1>

      <Footer />
    </React.Fragment>
  );
}

export default SuccesfulSignInPage;
