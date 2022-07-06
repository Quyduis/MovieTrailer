import { createSlice } from "@reduxjs/toolkit";

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
    fetchData() {
        
    }
  }
});

// Action
export const HomeAction = HomeSlice.actions


// Reducer
const HomeReducer = HomeSlice.reducer

export default HomeReducer
