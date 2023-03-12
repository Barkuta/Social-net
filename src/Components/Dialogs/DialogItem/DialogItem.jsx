import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div>
      <NavLink to={"/dialogs/" + props.id} className={s.dialog}>
        <div>
          <img src={props.img}></img>
        </div>
        <a>{props.name}</a>
      </NavLink>
    </div>
  );
};

export default DialogItem;
