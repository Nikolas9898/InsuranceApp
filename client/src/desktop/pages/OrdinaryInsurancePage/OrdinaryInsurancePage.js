import React from "react";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import SimpleInsuranceContainer from "../../modules/simpleInsurance/SimpleInsuranceContainer";

function OrdinaryInsurancePage(props) {
  return (
    <React.Fragment>
      <Header />
      <SimpleInsuranceContainer />
      <Footer />
    </React.Fragment>
  );
}

export default OrdinaryInsurancePage;
