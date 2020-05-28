import axios from "axios";
import * as actions from "../constants/userConstants";

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
  axios
    .post(`${baseUrl}/login`, userDetails)
    .then((response) => {
      const { user } = response.data;
      dispatch(userLoginSuccess(user));
      dispatch(userLoginPending(false));
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("auth_token", user.token);
      localStorage.setItem("user", JSON.stringify(user));
    })
    .catch((error) => {
      if (error.response) {
        dispatch(userLoginPending(false));
        dispatch(userLoginFailure({ message: error.response.data.message }));
      }
    });
};

export const logout = () => (dispatch) => {
  dispatch(userLogout());
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user");
};

export const createUser = (userInfo) => (dispatch) => {
  dispatch(createUserPending(true));
  axios
    .post(baseUrl, userInfo)
    .then((response) => {
      const { user } = response.data;
      dispatch(createUserSuccess(user));
      dispatch(createUserPending(false));
    })
    .catch((error) => {
      if (error.response) {
        dispatch(createUserFailure(error.response.data.message));
        dispatch(createUserPending(false));
      }
    });
};
