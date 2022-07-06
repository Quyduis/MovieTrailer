import { takeLatest } from "redux-saga/effects";
import { HomeAction } from "./home-slice";

function* fetchDataSaga() {
    yield console.log('fetchhh');
    
}

export function* HomeSaga() {
  yield takeLatest(HomeAction.fetchData.type, fetchDataSaga);
}
