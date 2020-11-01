import React from "react";
import HeaderStyle from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={HeaderStyle.header_wrapper}>
      <h2 className={HeaderStyle.logo_wrapper}>
        <Link to={"/"}>NiksanInsureBG</Link>
      </h2>
      <ul className={HeaderStyle.navigation}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </ul>

      <Link className={HeaderStyle.login} to={"/login"}>
        Login
      </Link>
    </header>
  );
}

export default Header;
