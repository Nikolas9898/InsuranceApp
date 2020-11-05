import React, { useState } from "react";
import axios from "axios";
import { useUserUpdate } from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import LoginForm from "./components/LoginFrom/LoginForm";

function LoginContainer(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const saveUser = useUserUpdate();
  const history = useHistory();

  function Login(e) {
    let user = e;

    axios
      .post("http://localhost:5000/api/sign-in", user)
      .then((response) => {
        if (response.data.errorMSG) {
          setLoginError(response.data.errorMSG);
        } else {
          localStorage.setItem("jwt", response.data.token);
          saveUser(response.data);
          setLoginError("");
          history.push("/");
        }
      })
      .catch((e) => {
        setLoginError("Something went wrong");
      });
  }

  const handleInputChange = (e) =>
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const { username, password } = user;

  return (
    <React.Fragment>
      <LoginForm
        username={username}
        password={password}
        user={user}
        Login={Login}
        loginError={loginError}
        handleInputChange={handleInputChange}
      />
    </React.Fragment>
  );
}

export default LoginContainer;
