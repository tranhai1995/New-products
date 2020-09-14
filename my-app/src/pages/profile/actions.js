import { createAction } from "@reduxjs/toolkit";

export default {
  reAuth: createAction("reAuth"),
  reAuthSuccess: createAction("reAuthSuccess"),
  reAuthFailed: createAction("reAuthFailed"),
  logout: createAction("logout"),
  logoutSuccess: createAction("logoutSuccess"),
  logoutFailed: createAction("logoutFailed"),
};
