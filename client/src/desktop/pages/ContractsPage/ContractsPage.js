import React from "react";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import ContractsContainer from "../../modules/contracts/ContractsContainer";

function ContractsPage(props) {
  return (
    <React.Fragment>
      <Header />
      <ContractsContainer />
      <Footer />
    </React.Fragment>
  );
}

export default ContractsPage;
