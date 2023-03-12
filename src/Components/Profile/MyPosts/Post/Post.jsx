import React from "react";
import Preloader from "../../../Common/Preloader/preloader";
import Avapost from "./Avapost/Avapost";
import s from "./Post.module.css";

<Avapost />;

const Post = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.item}>
      <div className={s.box}>
        <img src={props.profile.photos.small} />
      </div>
      <div className={s.postblock}>
        <p>{props.profile.fullName}</p>
        <div className={s.message}>{props.message}</div>
        <div className={s.like}>
          <div className={s.date}>Date&&&</div>
          <span>Like: {props.likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
