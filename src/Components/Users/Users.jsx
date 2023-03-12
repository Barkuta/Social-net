import React from "react";
import s from "./User.module.css";
import userPhoto from "../../../src/Assets/Images/profile-anonymous2.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   if (pages.length <= props.currentPage) pages.push(i);
  //   else if (props.currentPage === pages.length) {
  //     pages.push(i);
  //   }
  // }

  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length <= props.currentPage) pages.push(i);
    else if (props.currentPage === pages.length) {
      pages.push(i);
    }
  }

  return (
    <div className={s.container}>
      {pages.map((p) => {
        return (
          <span
            className={props.currentPage === p && s.selectedPage}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}

      <h1>Users</h1>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={s.userBox}>
            <div>
              <div className={s.photobox}>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    className={s.userPhoto}
                  />
                </NavLink>
              </div>
              <div className={s.btn}>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unFollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={s.namestatus}>
              <div>
                <div className={s.name}>{u.name}</div>
              </div>
              <div className={s.status}>
                <h5>Status:</h5>
                <div>{u.status}</div>
              </div>
            </div>
            <div className={s.location}>
              <div></div>
              <div className={s.locationcc}>
                <div>
                  <h5>Location:</h5>
                  <div> Country: {"u.location.country"}</div>
                  <div> City: {"u.location.city"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
