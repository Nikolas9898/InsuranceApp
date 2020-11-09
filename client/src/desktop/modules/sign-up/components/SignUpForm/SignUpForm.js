import React from "react";
import SignUpFormStyle from "./SignUpForm.module.css";

function SignUpForm({
  signUp,
  handleInputChange,
  user,
  errors,
  isValid,
  exists,
}) {
  return (
    <form className={SignUpFormStyle.form}>
      <h1>Sign Up</h1>
      <span>{exists}</span>
      <input
        className={SignUpFormStyle.input}
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleInputChange}
      />

      {isValid === false && <span>{errors.email}</span>}
      <input
        type="text"
        className={SignUpFormStyle.input}
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      {isValid === false && <span>{errors.username}</span>}
      <input
        className={SignUpFormStyle.input}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      {isValid === false && <span>{errors.password}</span>}

      {/* <span>{loginError}</span> */}

      <button type="button" onClick={signUp}>
        Sign up
      </button>
    </form>
  );
}

export default SignUpForm;
