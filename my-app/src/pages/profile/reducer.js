import { createReducer } from "@reduxjs/toolkit";
import profileAct from "./actions";
import LoginAct from "@zef/pages/logins/actions";

const initialState = {
  reAuth: false,
  firstCall: false,
  user: null,
};
export default createReducer(initialState, {
  [LoginAct.loginSuccess]: (state, action) => {
    return {
      ...state,
      isAuth: true,
      user: action.payload.user,
      firstCall: true,
    };
  },
  [profileAct.reAuthSuccess]: (state, action) => {
    return {
      ...state,
      reAuth: true,
      user: action.payload.user,
    };
  },
  [profileAct.reAuthFailed]: (state) => {
    return {
      ...state,
      isAuth: false,
      user: null,
      firstCall: true,
    };
  },
  [profileAct.logoutSuccess]: (state) => {
    return {
      ...state,
      isAuth: false,
    };
  },
});
