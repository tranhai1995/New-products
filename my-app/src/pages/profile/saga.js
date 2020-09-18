import { takeLatest, put } from "redux-saga/effects";
import { featherSocket } from "@zef/feathers";
import actions from "./actions";

function* reAuth() {
  try {
    const { user } = yield featherSocket.reAuthenticate();
    yield put(actions.reAuthSuccess({ user }));
  } catch (errors) {
    yield put(actions.reAuthFailed({ errors }));
  }
}

function* logout() {
  try {
    const { isAuth } = yield featherSocket.logout();
    yield put(actions.logoutSuccess({ isAuth }));
  } catch (e) {
    yield put(actions.logoutFailed({ message: e.message }));
  }
}

export default function* () {
  yield takeLatest(actions.reAuth.type, reAuth);
  yield takeLatest(actions.logout, logout);
}
