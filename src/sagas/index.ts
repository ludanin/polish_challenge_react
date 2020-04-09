import axios, { AxiosResponse } from "axios";
import { all, delay, put, takeLatest } from "redux-saga/effects";

import types from "actions/types";

/**
 * Keeps FETCH_DATA running continously until the application is closed
 */
function* watchFETCH_DATA() {
  yield takeLatest(types.FETCH_DATA, FETCH_DATA);
} function* FETCH_DATA() {
  try {
    yield delay(1000);

    const response: AxiosResponse<string> = yield axios.get(
      "http://localhost:8080/api/get",
    );

    if (response.status === 200) {
      yield put({
        type: types.FETCH_DATA,
        data: response.data,
      });
    } else {
      yield put({
        type: types.FETCH_DATA,
        data: [],
      });
    }
  } catch(err) {
    console.log(err);
  }
}

export default function* sagas() {
  yield all([
    watchFETCH_DATA(),
  ]);
}
