import dialogsReduser from "./dialogs-reducer";
import profileReduser from "./profile-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const NEW_MESSAGE = "NEW-MASSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "12345678",
          likesCount: "10",
        },
      ],
      imgData: [
        {
          id: 1,
          img: "https://sun9-37.userapi.com/impg/zf16tgVsaBKcL3GrQRozmqQZrOLnmjBNfd0sBQ/G0D5OpU1vyI.jpg?size=604x561&quality=96&sign=d150446c3fa64604abab6306d2326ef7&c_uniq_tag=Ixwq4myI-77a82zgE9BvXRaPDvkAJW0qu5atAjas2Lk&type=album",
        },
        {
          id: 2,
          img: "https://sun9-37.userapi.com/impg/zf16tgVsaBKcL3GrQRozmqQZrOLnmjBNfd0sBQ/G0D5OpU1vyI.jpg?size=604x561&quality=96&sign=d150446c3fa64604abab6306d2326ef7&c_uniq_tag=Ixwq4myI-77a82zgE9BvXRaPDvkAJW0qu5atAjas2Lk&type=album",
        },
        {
          id: 3,
          img: "https://mediabet.us/06/94/61a0839edcaee_1637909406.png",
        },
        {
          id: 4,
          img: "https://yt3.googleusercontent.com/BPvAhN063Zhd9R5D-e1kccMZPJS5k2z1e2DLQufKUuy0ePWd_kQlNxpZkdXzvTYT-M3SU35z=s900-c-k-c0x00ffffff-no-rj",
        },
      ],
      avaData: [
        {
          id: 1,
          img: "https://sun9-54.userapi.com/impg/KdGB0aLTYTmk21OjvgCI_kdXfz0qewnDuuTbXw/CKRpilx8Td8.jpg?size=604x604&quality=95&sign=567f5bb2321d58153fe7a2790b5a0254&c_uniq_tag=95yxemYChY2NiIBst21R_9JhqfnZGjQRDTQfNFu9oW0&type=album",
        },
      ],
      // avapostData: [
      //   {
      //     id: 1,
      //     img: "https://sun9-54.userapi.com/impg/KdGB0aLTYTmk21OjvgCI_kdXfz0qewnDuuTbXw/CKRpilx8Td8.jpg?size=604x604&quality=95&sign=567f5bb2321d58153fe7a2790b5a0254&c_uniq_tag=95yxemYChY2NiIBst21R_9JhqfnZGjQRDTQfNFu9oW0&type=album",
      //   },
      // ],
      friendsData: [
        {
          id: 1,
          name: "Alisher",
          img: "https://sun6-22.userapi.com/s/v1/ig2/QSpzLj_2EmgdbN9q2zIOlskuxNtA2fUB4OduydgsCbUsEwave1m2TigNcN63nIptnJWEcJTRa-GrBzObG2GVj1Bz.jpg?size=400x0&quality=96&crop=59,101,354,354&ava=1",
        },
        {
          id: 2,
          name: "Vova",
          img: "https://s.ukropen.net/attach/00001/9521/00e7c86b9d1275690c9c.png",
        },
        {
          id: 3,
          name: "Technic",
          img: "https://39.img.avito.st/avatar/social/1024x1024/4392372739.jpg",
        },
        {
          id: 4,
          name: "Timan",
          img: "https://static-prod.weplay.tv/users/avatar/user_406179_054d25fded1dda48aa7a7a4ea29aec24.59443B-E1CDC0-B4B4B0.png",
        },
        {
          id: 5,
          name: "Borov",
          img: "https://sun9-7.userapi.com/impf/c851332/v851332490/1425e8/dXAF0VT_nAQ.jpg?size=1017x1086&quality=96&sign=22047e4df98c5a434a706de7d2a9f3fa&c_uniq_tag=f_mvTV1j9Mrb9yZSBQTuupZ4ous7aaqdfcyKFmvw4rY&type=album",
        },
      ],
      newPostText: "яхай",
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Murad",
          img: "https://sun9-54.userapi.com/impg/KdGB0aLTYTmk21OjvgCI_kdXfz0qewnDuuTbXw/CKRpilx8Td8.jpg?size=604x604&quality=95&sign=567f5bb2321d58153fe7a2790b5a0254&c_uniq_tag=95yxemYChY2NiIBst21R_9JhqfnZGjQRDTQfNFu9oW0&type=album",
        },
        {
          id: 2,
          name: "Alisher",
          img: "https://sun6-22.userapi.com/s/v1/ig2/QSpzLj_2EmgdbN9q2zIOlskuxNtA2fUB4OduydgsCbUsEwave1m2TigNcN63nIptnJWEcJTRa-GrBzObG2GVj1Bz.jpg?size=400x0&quality=96&crop=59,101,354,354&ava=1",
        },
        {
          id: 3,
          name: "Vova",
          img: "https://s.ukropen.net/attach/00001/9521/00e7c86b9d1275690c9c.png",
        },
        {
          id: 4,
          name: "Technic",
          img: "https://39.img.avito.st/avatar/social/1024x1024/4392372739.jpg",
        },
        {
          id: 5,
          name: "Timan",
          img: "https://static-prod.weplay.tv/users/avatar/user_406179_054d25fded1dda48aa7a7a4ea29aec24.59443B-E1CDC0-B4B4B0.png",
        },
        {
          id: 6,
          name: "Borov",
          img: "https://sun9-7.userapi.com/impf/c851332/v851332490/1425e8/dXAF0VT_nAQ.jpg?size=1017x1086&quality=96&sign=22047e4df98c5a434a706de7d2a9f3fa&c_uniq_tag=f_mvTV1j9Mrb9yZSBQTuupZ4ous7aaqdfcyKFmvw4rY&type=album",
        },
      ],
      messages: [
        {
          id: 1,
          message: "",
        },
        // {
        //   id: 2,
        //   message: "Где слава марлоу?",
        // },
        // {
        //   id: 3,
        //   message: "Дайте абрамсов",
        // },
        // {
        //   id: 4,
        //   message: "yo",
        // },
        // {
        //   id: 5,
        //   message: "yo",
        // },
        // {
        //   id: 6,
        //   message: "yo",
        // },
      ],
      newMessageText: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

// let rerenderEntireTree = () => {};

// const addPost = () => {
//   let newPost = {
//     id: 2,
//     message: state.profilePage.newPostText,
//     likesCount: 0,
//   };

//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = "";
//   rerenderEntireTree(state);
// };

// const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// };

// const newMessage = () => {
//   let text = {
//     id: 2,
//     message: state.dialogsPage.newMessageText,
//   };
//   state.dialogsPage.messages.push(text);
//   state.dialogsPage.newMessageText = "";
//   rerenderEntireTree(state);
// };

// const updateMessegeText = (newText) => {
//   state.dialogsPage.newMessageText = newText;
//   rerenderEntireTree(state);
// };

// const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// };

export default store;
