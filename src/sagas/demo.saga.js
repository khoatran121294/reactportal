import { call, put, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";
import { DEMO_REQUESTING, DEMO_FULFILLED, DEMO_REJECTED } from "../actions";
import request from "../helpers/request.helper";

function* requestDemo() {
  try {
    const data = yield call(
      request.testGet.bind(request),
      "http://cors-everywhere.herokuapp.com/http://country.io/names.json"
    );
    yield call(delay, 3000);
    yield put({ type: DEMO_FULFILLED, data });
  } catch (e) {
    yield put({ type: DEMO_REJECTED });
  }
}

export function* watchDemoSagasAsync() {
  yield takeLatest(DEMO_REQUESTING, requestDemo);
}
