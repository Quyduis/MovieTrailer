import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ListRespone } from "model/common";
import { Movie } from "model/movie";

interface HomeState {
  bannerImage: string;
  listMovieTrending: Movie[];
}

const initialHomeState: HomeState = {
  bannerImage: "",
  listMovieTrending: [],
};

const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState: initialHomeState,
  reducers: {
    fetchData(state: HomeState) {
      state.bannerImage = "";
    },

    fetchDataSuccess(
      state: HomeState,
      action: PayloadAction<ListRespone<Movie>>
    ) {
      const { results } = action.payload;
      const listMovieTrending: Movie[] = results;
      const randomImage = Math.floor(Math.random() * listMovieTrending.length);
      state.bannerImage = listMovieTrending[randomImage].backdrop_path;
      state.listMovieTrending = listMovieTrending;
    },
  },
});

// Action
export const HomeAction = HomeSlice.actions;

// Selector
export const bannerTrendingSelector = (state: RootState) =>
  state.HomeReducer.bannerImage;
export const listMovieTrendingSelector = (state: RootState) =>
  state.HomeReducer.listMovieTrending;

// Reducer
const HomeReducer = HomeSlice.reducer;

export default HomeReducer;
