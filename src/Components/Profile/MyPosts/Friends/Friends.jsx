import React from "react";
import s from "./../MyPosts.module.css";

let FriendsItem = (props) => {
  return (
    <div className={s.frienditem}>
      <div>
        <img src={props.img} alt="" />
      </div>
      <div className={s.friendsname}>{props.name}</div>
    </div>
  );
};

export default FriendsItem;
