import React from "react";
import LoginStyle from "./LoginForm.module.css";

function LoginForm({ handleInputChange, loginError, Login, user }) {
  const { username, password } = user;

  return (
    <form className={LoginStyle.form}>
      <h1>Login</h1>
      <input
        type="text"
        className={LoginStyle.input}
        onChange={handleInputChange}
        value={username}
        name="username"
        placeholder="Username"
      />
      <input
        className={LoginStyle.input}
        onChange={handleInputChange}
        value={password}
        type="password"
        name="password"
        placeholder="Password"
      />

      <span>{loginError}</span>

      <button type="button" onClick={() => Login(user)}>
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
