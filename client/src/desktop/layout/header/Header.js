import React from "react";
import HeaderStyle from "./Header.module.css";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function Header(props) {
  const user = useUser();

  const logout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };

  return (
    <header className={HeaderStyle.header_wrapper}>
      <h2 className={HeaderStyle.logo_wrapper}>
        <Link to={"/"}>NiksanInsureBG</Link>
      </h2>
      <ul className={HeaderStyle.navigation}>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>

        {user.type === "admin" ? (
          <Link to={"/admin/insurances"}>Insurance</Link>
        ) : (
          ""
        )}

        {user === "" ? "" : <Link to={"contracts"}>Contracts</Link>}
      </ul>

      {user ? (
        <div className={HeaderStyle.login}>
          <div className={HeaderStyle.profile}>{user.username}</div>

          <div className={HeaderStyle.logout}>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </div>
        </div>
      ) : (
        <div className={HeaderStyle.login}>
          <Link to={"/login"}>Login</Link> /{" "}
          <Link to={"/sign-up"}>Sing-up</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
