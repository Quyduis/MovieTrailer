import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { ListRespone } from "model/common";
import { MovieTrending } from "model/movie-trending";

interface HomeState {
  bannerImage: string;
}

const initialHomeState: HomeState = {
  bannerImage: "",
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
      action: PayloadAction<ListRespone<MovieTrending>>
    ) {
      const { results } = action.payload;
      const listMovieTrending: MovieTrending[] = results;
      const randomImage = Math.floor(
        Math.random() * listMovieTrending.length
      );
      state.bannerImage = listMovieTrending[randomImage].backdrop_path;
    },
  },
});

// Action
export const HomeAction = HomeSlice.actions;

// Selector
export const bannerTrendingSelector = (state: RootState) =>
  state.HomeReducer.bannerImage;

// Reducer
const HomeReducer = HomeSlice.reducer;

export default HomeReducer;
