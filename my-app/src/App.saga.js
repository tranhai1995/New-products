import { fork } from "redux-saga/effects";

import homeSaga from "@zef/pages/home/saga";
import userSaga from "@zef/pages/user/saga";
// import dropdownSaga from "@zef/pages/user/dropdown/saga";

export default function* () {
  yield fork(userSaga);
  yield fork(homeSaga);
  // yield fork(dropdownSaga);
}
