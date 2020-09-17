import { createReducer } from "@reduxjs/toolkit";
import searchPrice from "@zef/pages/user/menu/actions";
import { data } from "@zef/pages/user/data";

const initialState = {
  database: data,
};

export default createReducer(initialState, {
  [searchPrice.searchPriceSuccess]: (state, action) => {
    return {
      ...state,
      database: action.payload.setSearch,
    };
  },
});
