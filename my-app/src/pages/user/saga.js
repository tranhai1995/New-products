import { put, takeLatest } from "redux-saga/effects";
import actions from "@zef/pages/user/actions";

function* language({ payload }) {
  const { locale } = payload;
  console.log("aaaaa", locale);
  try {
    yield put(actions.localeSuccess({ locale: locale }));
  } catch (e) {
    yield put(actions.localeFailed({ message: e.message }));
  }
}

export default function* () {
  yield takeLatest(actions.locale, language);
}
