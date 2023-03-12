import { profileApi, usersApi } from "../API/Api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
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
      img: "https://www.nchti.ru/wp-content/images/profile-anonymous2.png",
    },
    {
      id: 2,
      img: "https://www.nchti.ru/wp-content/images/profile-anonymous2.png",
    },
    {
      id: 3,
      img: "https://www.nchti.ru/wp-content/images/profile-anonymous2.png",
    },
    {
      id: 4,
      img: "https://www.nchti.ru/wp-content/images/profile-anonymous2.png",
    },
  ],
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
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 2,
        message: action.post,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (post) => {
  return { type: ADD_POST, post };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const getProfile = (userId) => {
  return (dispatch) => {
    usersApi.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
