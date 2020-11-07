import React from "react";
import HeaderStyle from "./Header.module.css";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function Header(props) {
  const user = useUser();

  return (
    <header className={HeaderStyle.header_wrapper}>
      <h2 className={HeaderStyle.logo_wrapper}>
        <Link to={"/"}>NiksanInsureBG</Link>
      </h2>
      <ul className={HeaderStyle.navigation}>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>

        {user === "" ? "" : <Link to={"/admin/insurances"}>Insurance</Link>}
      </ul>

      {user ? (
        <div className={HeaderStyle.login}>{user.username}</div>
      ) : (
        <Link className={HeaderStyle.login} to={"/login"}>
          Login
        </Link>
      )}
    </header>
  );
}

export default Header;
