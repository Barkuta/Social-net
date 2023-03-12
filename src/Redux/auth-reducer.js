import { authAPI, usersApi } from "../API/Api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "network/auth/SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const LOGIN = "LOGIN";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetchingAC: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
};

export const toggleIsFetchingAC = (isFetchingAC) => {
  return { type: TOGGLE_IS_FETCHING, isFetchingAC };
};

export const getAuthMe = () => async (dispatch) => {
  let data = await usersApi.getAuthMe();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthMe());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;

// if (currentPage === 5) {
// }
