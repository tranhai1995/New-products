import { createAction } from "@reduxjs/toolkit";

export default {
  locale: createAction("locale"),
  localeSuccess: createAction("localeSuccess"),
  localeFailed: createAction("localeFailed"),
};
