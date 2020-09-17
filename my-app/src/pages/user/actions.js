import { createAction } from "@reduxjs/toolkit";

export default {
  locale: createAction("locale"),
  localeSuccess: createAction("localeSuccess"),
  localeFailed: createAction("localeFailed"),

  getCard: createAction("getCart"),
  getCardSuccess: createAction("getCardSuccess"),
  getCardFailed: createAction("getCardFailed"),
};
