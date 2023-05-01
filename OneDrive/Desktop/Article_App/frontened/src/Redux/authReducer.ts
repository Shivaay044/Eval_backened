import React from "react";
import {
    POST_LOGIN_FALIURE,
    POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_REGISTER_FALIURE,
  POST_REGISTER_REQUEST,
  POST_REGISTER_SUCCESS,
} from "./action";

const initialState: LoginState = {
  isAuth: false,
};

const authReducer = (state = initialState, { type, payload }: LoginAction) => {
  switch (type) {
    case POST_REGISTER_REQUEST:
      return { ...state };
    case POST_REGISTER_SUCCESS:
      return { ...state };
    case POST_REGISTER_FALIURE:
      return { ...state };
    case POST_LOGIN_REQUEST:
      return { ...state, isAuth:true };
    case POST_LOGIN_SUCCESS:
      return { ...state };
    case POST_LOGIN_FALIURE:
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
