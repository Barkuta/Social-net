import React from "react";
import FriendsItem from "./Friends/Friends";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../Utils/Valodators/validators";
import { Element } from "../../Common/FormsControls/FormsControls";
import { Component } from "react";
import { PureComponent } from "react";

class MyPosts extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state;
  // }

  render() {
    const onSubmit = (values) => {
      this.props.addPost(values.post);
    };
    let friendsElement = this.props.friends.map((f) => (
      <FriendsItem name={f.name} img={f.img} />
    ));

    let postsElement = this.props.posts.map((post) => (
      <Post
        message={post.message}
        likesCount={post.likesCount}
        profile={this.props.profile}
      />
    ));

    return (
      <div className={s.postsBlock}>
        <div className={s.friends}>
          <div className={s.friendsbox}>
            <div className={s.borderbox}>
              <h4>Murad's friends</h4>
            </div>
            <div className={s.friendsnamebox}>{friendsElement}</div>
          </div>
          <div></div>
        </div>
        <div className={s.posts}>
          <div className={s.text}>
            <h2>My posts</h2>
          </div>
          <ReduxPostForm onSubmit={onSubmit} />
          <div className={s.newposts}>
            <h4>New posts</h4>
          </div>
          <div className={s.postselements}>{postsElement}</div>
        </div>
      </div>
    );
  }
}

const Textarea = Element("textarea");

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
    <form className={s.textarea} onSubmit={props.handleSubmit}>
      <Field
        name={"post"}
        placeholder={"Add new post..."}
        component={Textarea}
        // validate={[required, maxLength10]}
      />
      <div className={s.btn}>
        <button>Add post</button>
      </div>
    </form>
  );
};

const ReduxPostForm = reduxForm({
  form: "post",
})(PostForm);

export default MyPosts;
