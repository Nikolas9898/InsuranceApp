import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AdminInsurancePage from "./pages/InsurancePage/InsurancePage";
import InsuranceContract from "./pages/InsuranceContract/InsuranceContract";
import ContractsPage from "./pages/ContractsPage/ContractsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { UserProvider } from "./context/UserContext";

import { AuthenticatedRoute } from "./helpers/AuthRoute";
import { AuthenticatedCustomerRoute } from "./helpers/AuthCustomerRoute";

const Routes = (props) => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/insurance-contract" component={InsuranceContract} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/contracts" component={ContractsPage} />
          <Route exact path="/admin/contracts" component={ContractsPage} />

          <AuthenticatedRoute
            path="/admin/insurances"
            component={AdminInsurancePage}
          />

          {/* <Route path="/subjects/:year" exact component={SubjectsPage} />
        <Route path="/category/:slug" exact component={CategoryProductsPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/contacts" component={ContactsPage} /> */}
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </Router>
    </UserProvider>
  );
};

Routes.propTypes = {};

export default Routes;
