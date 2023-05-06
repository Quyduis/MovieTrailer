import { HomeSaga } from "page/home_old/home-saga";
import { all } from "redux-saga/effects";


export default function* rootSaga() {
  yield all([HomeSaga()])
  
}
