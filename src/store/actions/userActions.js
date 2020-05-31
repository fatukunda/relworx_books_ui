import axios from "axios";
import * as actions from "../constants/userConstants";
// import { history } from "../../App";

const baseUrl = "https://relworxbooks.herokuapp.com/api/v1/users";

export const userLoginSuccess = (user) => {
  return {
    type: actions.USER_LOGIN_SUCCESS,
    payload: user,
  };
};

const userLoginFailure = (error) => {
  return {
    type: actions.USER_LOGIN_FAILURE,
    payload: error,
  };
};

const userLoginPending = (isLoading) => {
  return {
    type: actions.USER_LOGIN_PENDING,
    payload: isLoading,
  };
};

const userLogout = () => {
  return {
    type: actions.USER_LOGOUT,
  };
};

const createUserSuccess = (user) => {
  return {
    type: actions.USER_REGISTRATION_SUCCESS,
    payload: user,
  };
};

const createUserFailure = (error) => {
  return {
    type: actions.USER_REGISTRATION_FAILURE,
    payload: error,
  };
};

const createUserPending = (isLoading) => {
  return {
    type: actions.USER_REGISTRATION_PENDING,
    payload: isLoading,
  };
};

export const login = (userDetails) => async (dispatch) => {
  dispatch(userLoginPending(true));
  try {
    const response = await axios.post(`${baseUrl}/login`, userDetails);
    const {
      data: { user, token },
    } = response.data;
    dispatch(userLoginSuccess({ user, token }));
    dispatch(userLoginPending(false));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("auth_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/books";
  } catch (error) {
    if (error.response) {
      dispatch(userLoginPending(false));
      dispatch(userLoginFailure({ message: error.response.data.message }));
    }
  }
};

export const logout = () => (dispatch) => {
  dispatch(userLogout());
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user");
  window.location.href = "/";
};

export const createUser = (userInfo) => async (dispatch) => {
  dispatch(createUserPending(true));
  try {
    const response = await axios.post(baseUrl, userInfo);
    const {
      data: { user, token },
    } = response.data;
    dispatch(createUserSuccess({ user, token }));
    dispatch(createUserPending(false));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("auth_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/books";
  } catch (error) {
    if (error.response) {
      dispatch(createUserFailure(error.response.data.message));
      dispatch(createUserPending(false));
    }
  }
};
