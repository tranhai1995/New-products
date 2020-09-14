import { createReducer } from "@reduxjs/toolkit";
import actions from "@zef/pages/home/actions";

const initialState = {
  video: [],
  message: null,
};

export default createReducer(initialState, {
  [actions.videoCallSuccess]: (state, action) => {
    return {
      ...state,
      video: action.payload,
    };
  },
  [actions.videoCallError]: (state, action) => {
    return {
      ...state,
      message: action.payload,
    };
  },
});
