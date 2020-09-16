import { put, takeLatest } from "redux-saga/effects";
import actions from "@zef/pages/user/menu/actions";

function* search({ payload }) {
  const { data, searchKey } = payload;
  console.log(searchKey);
  try {
    const setSearch = data.filter((data) => data.price >= searchKey);
    console.log("aa", setSearch);
    yield put(actions.searchPriceSuccess({ setSearch }));
  } catch (e) {
    yield put(actions.searchPriceFailed({ message: e.message }));
  }
}

export default function* () {
  yield takeLatest(actions.searchPrice, search);
}
