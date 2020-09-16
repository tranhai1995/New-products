import { createAction } from "@reduxjs/toolkit";

export default {
  searchPrice: createAction("searchPrice"),
  searchPriceSuccess: createAction("searchPriceSuccess"),
  searchPriceFailed: createAction("searchPriceFailed"),
};
