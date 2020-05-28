import * as actions from "../constants/userConstants";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  error: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case actions.USER_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
      };
    case actions.USER_LOGIN_PENDING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actions.USER_LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        isLoading: false,
      };
    case actions.USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case actions.USER_REGISTRATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.USER_REGISTRATION_PENDING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
