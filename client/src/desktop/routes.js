import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import InsurancePage from "./pages/InsurancePage/InsurancePage";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/insurance" component={InsurancePage} />
        {/* <Route path="/subjects/:year" exact component={SubjectsPage} />
        <Route path="/category/:slug" exact component={CategoryProductsPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/contacts" component={ContactsPage} /> */}
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};

export default Routes;
