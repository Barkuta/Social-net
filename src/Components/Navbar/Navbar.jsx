import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" activeClassName={s.active} className={s.item}>
          <div className={s.displayItems}>
            <div className={s.peopleOutline}>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className={s.divInside}>Profile</div>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={s.item}>
          <div className={s.displayItems}>
            <div className={s.peopleOutline}>
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
            <div className={s.divInside}>Messages</div>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" className={s.item}>
          <div className={s.displayItems}>
            <div className={s.peopleOutline}>
              <ion-icon name="people-outline"></ion-icon>
            </div>
            <div className={s.divInside}>Users</div>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={s.item}>
          <div className={s.displayItems}>
            <div className={s.peopleOutline}>
              <ion-icon name="newspaper-outline"></ion-icon>
            </div>
            <div className={s.divInside}>News</div>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={s.item}>
          <div className={s.displayItems}>
            <div className={s.peopleOutline}>
              <ion-icon name="musical-notes-outline"></ion-icon>
            </div>
            <div className={s.divInside}>Music</div>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={s.item}>
          <div className={s.displayItems}>
            <div className={s.peopleOutline}>
              <ion-icon name="cog-outline"></ion-icon>
            </div>
            <div className={s.divInside}>Settings</div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
