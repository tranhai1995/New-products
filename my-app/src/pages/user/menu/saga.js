import { put, takeLatest } from "redux-saga/effects";
import actions from "@zef/pages/user/menu/actions";

function* search({ payload }) {
  const { data, searchKey } = payload;
  // const sortable = data.sort((a, b) => b.price - a.price);
  try {
    const sortable = [...data].sort((a, b) => {
      if (searchKey === "1") {
        return a.price - b.price;
      } else if (searchKey === "2") {
        return b.price - a.price;
      }
    });
    console.log(sortable);
    yield put(actions.searchPriceSuccess({ sortable }));
  } catch (e) {
    yield put(actions.searchPriceFailed({ message: e.message }));
  }
}

function* searchNameItem({ payload }) {
  const { data, searchSetName } = payload;

  try {
    const nameSearch = data.filter(
      (data) => data.manufacturer === searchSetName
    );

    yield put(actions.searchNameSuccess({ nameSearch }));
  } catch (e) {
    yield put(actions.searchPriceFailed({ message: e.message }));
  }
}

export default function* () {
  yield takeLatest(actions.searchPrice, search);
  yield takeLatest(actions.searchName, searchNameItem);
}
