import React from "react";
import Preloader from "../../Common/Preloader/preloader";
import Photo from "./Photo/photo";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  let profileImgEl = props.img.map((i) => <Photo img={i.img} />);
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.box}>
      <div className={s.boxname}>
        <h4>{props.profile.fullName}</h4>
        <div></div>
        <div className={s.boxlink}>В сети</div>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div className={s.info}>
          <div className={s.name}>{props.profile.fullName}</div>
          <div className={s.city}>
            <ProfileStatusWithHooks
              status={props.status}
              updateStatus={props.updateStatus}
            />
          </div>
          <div className={s.age}>
            <div>
              <h5>Age:</h5>
            </div>
            <p>xx</p>
          </div>
          <div className={s.photoslink}>
            <h5>Murad's photos</h5>
          </div>
          <div className={s.photos}>
            <p>Watch all</p>
            {profileImgEl}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
