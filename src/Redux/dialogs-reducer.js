const NEW_MESSAGE = "NEW-MASSAGE";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Profile1",
      img: "https://www.nchti.ru/wp-content/images/profile-anonymous2.png",
    },
    {
      id: 2,
      name: "Profile2",
      img: "https://www.nchti.ru/wp-content/images/profile-anonymous2.png",
    },
    {
      id: 3,
      name: "Profile3",
      img: "https://www.nchti.ru/wp-content/images/profile-anonymous2.png",
    },
    {
      id: 4,
      name: "Profile4",
      img: "https://www.nchti.ru/wp-content/images/profile-anonymous2.png",
    },
    {
      id: 5,
      name: "Profile5",
      img: "https://www.nchti.ru/wp-content/images/profile-anonymous2.png",
    },
    {
      id: 6,
      name: "Profile6",
      img: "https://www.nchti.ru/wp-content/images/profile-anonymous2.png",
    },
  ],
  messages: [
    {
      id: 1,
      message: "",
    },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      let text = {
        id: 2,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, text],
      };

    default:
      return state;
  }
};

export const sendActionCreator = (newMessageBody) => {
  return { type: NEW_MESSAGE, newMessageBody };
};

export default dialogsReducer;
