import React from "react";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import SignUpContainer from "../../modules/sign-up/SignUpContainer";

function SignUpPage(props) {
  return (
    <React.Fragment>
      <Header />
      <SignUpContainer />
      <Footer />
    </React.Fragment>
  );
}

export default SignUpPage;
