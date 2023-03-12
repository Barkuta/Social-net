import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";
import React from "react";

test("lenght of post should be incremented", () => {
  let action = addPostActionCreator("yahay");
  let state = {
    posts: [
      {
        id: 1,
        message: "12345678",
        likesCount: "10",
      },
    ],
  };
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});

test("message of new post should be yahay", () => {
  let action = addPostActionCreator("yahay");
  let state = {
    posts: [
      {
        id: 1,
        message: "12345678",
        likesCount: "10",
      },
    ],
  };
  let newState = profileReducer(state, action);
  expect(newState.posts[0].message).toBe("yahay");
});

// test("after deleting length of messages should be decrement", () => {
//   let action = deletePost(1);
//   let state = {
//     posts: [
//       {
//         id: 1,
//         message: "12345678",
//         likesCount: "10",
//       },
//     ],
//   };
//   let newState = profileReducer(state, action);
//   expect(newState.posts.length).toBe(0);
// });
