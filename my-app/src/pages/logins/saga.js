import { put, takeLatest, all } from "redux-saga/effects";
import actions from "./actions";

function* login({ payload }) {
  const { user, password } = payload;
  console.log(user, password);
  try {
    yield all(put(actions.loginSuccess()));
  } catch (e) {
    yield put(actions.loginFailed({ message: e.message }));
  }
}

export default function* () {
  yield takeLatest(actions.login, login);
}

// function* logout() {
//   try {
//     const { isAuth } = yield featherSocket.logout();
//     yield put(actions.logoutSuccess({ isAuth }));
//   } catch (e) {
//     yield put(actions.logoutFailed({ message: e.message }));
//   }
// }
