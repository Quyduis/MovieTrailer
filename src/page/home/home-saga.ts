import HomeApi from "api/HomeApi";
import { ListRespone } from "model/common";
import { Movie } from "model/movie";
import { call, put, takeLatest } from "redux-saga/effects";
import { HomeAction } from "./home-slice";

function* fetchDataSaga() {
  try {
    const response: ListRespone<Movie> = yield call(
      HomeApi.getListMovieTrending, 'movie'
    );
     const { data } = response;
     console.log("dataa", data);
     console.log("dataa 222", response);

    yield put(HomeAction.fetchDataSuccess(data));
  } catch (_error: any) {}
}

export function* HomeSaga() {
  yield takeLatest(HomeAction.fetchData.type, fetchDataSaga);
}
