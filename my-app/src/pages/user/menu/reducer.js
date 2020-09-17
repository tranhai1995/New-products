import { createReducer } from "@reduxjs/toolkit";
import searchPrice from "@zef/pages/user/menu/actions";
import { data } from "@zef/pages/user/data";

const initialState = {
  database: data,
  message: "",
};

export default createReducer(initialState, {
  [searchPrice.searchPriceSuccess]: (state, action) => {
    return {
      ...state,
      database: action.payload.sortable,
    };
  },
  [searchPrice.searchPriceFailed]: (state, action) => {
    console.log(action.payload.message);
    return {
      ...state,
      message: action.payload.message,
    };
  },
  [searchPrice.searchNameSuccess]: (state, action) => {
    return {
      ...state,
      database: action.payload.nameSearch,
    };
  },
});
