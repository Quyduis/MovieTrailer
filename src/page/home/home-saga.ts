import HomeApi from "api/HomeApi";
import { ListRespone } from "model/common";
import { MovieTrending } from "model/movie-trending";
import { call, put, takeLatest } from "redux-saga/effects";
import { HomeAction } from "./home-slice";

function* fetchDataSaga() {
  try {
    const data: ListRespone<MovieTrending> = yield call(
      HomeApi.getListMovieTrending
    );
     const { page } = data;
     console.log("dataa", page);
     console.log("dataa 222", data);

    yield put(HomeAction.fetchDataSuccess(data));
  } catch (_error: any) {}
}

export function* HomeSaga() {
  yield takeLatest(HomeAction.fetchData.type, fetchDataSaga);
}
