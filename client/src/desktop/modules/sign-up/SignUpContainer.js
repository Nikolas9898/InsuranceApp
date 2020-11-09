import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import axios from "axios";

function SignUpContainer(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    type: "customer",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [isValid, setIsValid] = useState(false);

  const [exists, setExists] = useState("");

  const handleValidation = () => {
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!pattern.test(user.email)) {
      setErrors({
        ...errors,
        email: "Please enter valid email",
      });
      return false;
    } else if (user.username.length <= 5) {
      setErrors({
        ...errors,
        email: "",
        username: "Username must be more than 5 symbols",
        password: "",
      });
      return false;
    } else if (user.password.length <= 6) {
      setErrors({
        ...errors,
        username: "",
        password: "Password must be more than 6 symbols",
        email: "",
      });
      return false;
    } else {
      setErrors({});
      setIsValid(true);
      return true;
    }
  };

  const signUp = () => {
    let isValid = handleValidation();

    if (isValid) {
      axios
        .post("http://localhost:5000/api/user/sign-up", user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (err.response.data.err.keyPattern.username) {
            setExists("Username allready exists");
          } else if (err.response.data.err.keyPattern.email) {
            setExists("Email allready exists");
          }
        });
    }
  };

  const handleInputChange = (e) =>
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return (
    <React.Fragment>
      <SignUpForm
        exists={exists}
        signUp={signUp}
        handleInputChange={handleInputChange}
        user={user}
        errors={errors}
        isValid={isValid}
      />
    </React.Fragment>
  );
}

export default SignUpContainer;
