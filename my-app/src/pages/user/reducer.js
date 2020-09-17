import { createReducer } from "@reduxjs/toolkit";
import localeEN from "@zef/pages/user/actions";
import data from "@zef/components/axios";

const initialState = {
  locale: "en-US",
  getCart: data,
  count: "",
};

export default createReducer(initialState, {
  [localeEN.localeSuccess]: (state, action) => {
    return {
      ...state,
      locale: action.payload.locale,
    };
  },
  [localeEN.getCardSuccess]: (state, action) => {
    return {
      ...state,
      getCart: action.payload.getCart,
    };
  },
});
