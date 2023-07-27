import React from "react";
import gif from "../../../Assets/05aae8_919d2cb2b8cd45b89987ac286c043ed7~mv2.gif";
import s from "./preloader.module.css";

let Preloader = (props) => {
  return (
    <div className={s.div}>
      <img className={s.preloader} src={gif} />
    </div>
  );
};

export default Preloader;
