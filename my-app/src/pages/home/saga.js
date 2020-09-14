import { put, takeLatest } from "redux-saga/effects";
import actions from "@zef/pages/home/actions";

function* videoCallWeb() {
  try {
    yield put(actions.videoCallSuccess());
  } catch (e) {
    yield put(actions.videoCallError(e.message));
  }
}

export default function* () {
  yield takeLatest(actions.videoCall, videoCallWeb);
}
