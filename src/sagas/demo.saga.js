import { call, put, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";
import { DEMO_REQUESTING, DEMO_FULFILLED, DEMO_REJECTED } from "../actions";
import request from "../helpers/request.helper";

function* requestDemo() {
  try {
    // const post = yield call(
    //   request.get.bind(request),
    //   "http://"
    // );
    const post = {
      id: 1,
      content: "this is the content of post"
    };
    yield call(delay, 3000);
    yield put({ type: DEMO_FULFILLED, post });
  } catch (e) {
    yield put({ type: DEMO_REJECTED });
  }
}

export function* watchDemoSagasAsync() {
  yield [takeLatest(DEMO_REQUESTING, requestDemo)];
}
