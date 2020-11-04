import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import InsuranceContainer from "../../modules/insurance/InsuranceContainer";

function InsurancePage(props) {
  return (
    <React.Fragment>
      <Header />
      <InsuranceContainer
        insuranceState={props.location.state}
        insurancePrice={props.location.price}
      />
      <Footer />
    </React.Fragment>
  );
}

export default InsurancePage;
