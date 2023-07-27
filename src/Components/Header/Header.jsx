import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.box}>
        <div></div>
        <img src=""></img>
        <div className={s.loginBlock}>
          <div className={s.aBlock}>
            {props.isAuth ? (
              <div>
                {props.login} -{" "}
                <button className={s.btn} onClick={props.logout}>
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to={"/login"}>Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
