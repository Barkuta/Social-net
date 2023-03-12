import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
    // friends: state.profilePage.friendsData,
    friends: state.dialogsPage.dialogs,
    avapost: state.profilePage.avaData,
    profile: state.profilePage.profile,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPostActionCreator(post));
    },
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
