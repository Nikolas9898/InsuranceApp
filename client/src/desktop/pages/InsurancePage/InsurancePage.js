import React from "react";
import PropTypes from "prop-types";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import InsuranceContainer from "../../modules/insurance/InsuranceContainer";

InsurancePage.propTypes = {};

function InsurancePage(props) {
  return (
    <React.Fragment>
      <Header />
      <InsuranceContainer />
      <Footer />
    </React.Fragment>
  );
}

export default InsurancePage;
