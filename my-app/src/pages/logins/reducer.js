import LoginAct from "@zef/pages/logins/actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      email: "test@test.com",
      password: "111111",
    },
  ],
};

export default createReducer(initialState, {
  [LoginAct.loginSuccess]: (state, action) => {
    return {
      ...state,
      user: action.payload.user,
      password: action.payload.password,
    };
  },
});
