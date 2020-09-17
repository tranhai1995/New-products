import { put, takeLatest } from "redux-saga/effects";
import actions from "@zef/pages/user/actions";

function* language({ payload }) {
  const { locale } = payload;
  try {
    yield put(actions.localeSuccess({ locale: locale }));
  } catch (e) {
    yield put(actions.localeFailed({ message: e.message }));
  }
}

function* addCard({ payload }) {
  const { data } = payload;
  try {
    const userCart = data.map((getId) => {
      return getId.id;
    });
    console.log(userCart);
    yield put(actions.getCardSuccess({ userCart }));
  } catch (e) {
    yield put(actions.getCardFailed({ message: e.message }));
  }
}

export default function* () {
  yield takeLatest(actions.locale, language);
  yield takeLatest(actions.getCard, addCard);
}
