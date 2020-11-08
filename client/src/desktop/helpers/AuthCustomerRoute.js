import React, { useEffect } from "react";
// import jwt_decode from "jwt-decode";
import { useUser } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Rediredct } from "react-router-dom";

// let token;

// if (localStorage.getItem("jwt") === null) {
//   token = null;
// } else {
//   token = jwt_decode(localStorage.getItem("jwt"));
// }

export function AuthenticatedCustomerRoute(props) {
  const hystory = useHistory();
  const user = useUser();
  console.log(user);

  // route requires admin priv

  if (user === "") {
    hystory.push("/");
  } else if (user.type === "customer" || user.type === "admin") {
    return <props.component {...props} />;
  } else {
    hystory.push("/");
  }

  // if (user.foundUser.type === "admin") {
  //   return <props.component {...props} />;
  // } else {
  //   hystory.push("/");
  // }
  // return <props.component {...props} />;
}
