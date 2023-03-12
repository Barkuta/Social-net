import React from "react";
import s from "./../ProfileInfo.module.css";

const Photo = (props) => {
  return (
    <div className={s.photoblock}>
      <img src={props.img} alt="" />
    </div>
  );
};

export default Photo;
