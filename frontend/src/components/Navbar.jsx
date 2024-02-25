import React, { useContext } from "react";
import basketball from "../assets/basketball_logo-.png";
import { AppContext } from "./Context";
import { deleteCookie } from "../../utils/Cookie";
import { loginCheck } from "../../utils/loginCheck";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { login, setLogin } = useContext(AppContext);
  const logout = () => {
    deleteCookie("username");
    deleteCookie("auth-token")
    location.reload()
    setLogin(loginCheck());
  };
  const loginBtn = () => {
    if (login) {
      return (
        <div className="navbar-right">
          <div className="login" onClick={logout}>Logout</div>
        </div>
      );
    } else {
      return (
        <Link to="/signup" >
          <div className="login">Sign up</div>
        </Link>
      );
    }
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={basketball} alt="" />
          </div>
          <Link to={"/"}>   <div className="navbar-basketball">
            Basketball <span>Fails</span>
          </div></Link>
        </div>
        <div className="navbar-right">
        <Link to="/users"><div>Users</div></Link>
        {loginBtn()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
