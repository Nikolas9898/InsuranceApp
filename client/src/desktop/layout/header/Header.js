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
      </ul>

      {user.foundUser ? (
        <div className={HeaderStyle.login}>{user.foundUser.username}</div>
      ) : (
        <Link className={HeaderStyle.login} to={"/login"}>
          Login
        </Link>
      )}
    </header>
  );
}

export default Header;
