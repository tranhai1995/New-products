import { createAction } from "@reduxjs/toolkit";

export default {
  login: createAction("login"),
  loginSuccess: createAction("loginSuccess"),
  loginFailed: createAction("loginFailed"),
};
