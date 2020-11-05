import React from "react";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import InsuranceContract from "../../modules/insuranceContract/InsuranceContract";

function OrdinaryInsurancePage(props) {
  return (
    <React.Fragment>
      <Header />
      <InsuranceContract insuranceState={props.location.state} />
      <Footer />
    </React.Fragment>
  );
}

export default OrdinaryInsurancePage;
