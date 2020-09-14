import { createReducer } from "@reduxjs/toolkit";
import localeEN from "@zef/pages/user/actions";

const initialState = {
  locale: "en-US",
};

export default createReducer(initialState, {
  [localeEN.localeSuccess]: (state, action) => {
    return {
      ...state,
      locale: action.payload.locale,
    };
  },
});
