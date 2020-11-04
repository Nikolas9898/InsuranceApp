import React from "react";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import LoginContainer from "../../modules/login/LoginContainer";

function LoginPage(props) {
  return (
    <React.Fragment>
      <Header />
      <LoginContainer />
      <Footer />
    </React.Fragment>
  );
}

export default LoginPage;
