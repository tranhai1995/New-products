import { fork } from "redux-saga/effects";

import homeSaga from "@zef/pages/home/saga";
import userSaga from "@zef/pages/user/saga";
// import dropdownSaga from "@zef/pages/user/dropdown/saga";
import searchSaga from "@zef/pages/user/menu/saga";

export default function* () {
  yield fork(userSaga);
  yield fork(homeSaga);
  yield fork(searchSaga);
  // yield fork(dropdownSaga);
}
