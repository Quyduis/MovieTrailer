import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import HomeReducer from 'page/home_old/home-slice';
import createSagaMidleware from "redux-saga";
import rootSaga from './rootSaga';


const sagaMidleware = createSagaMidleware();

const rootReducer = combineReducers({
  HomeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMidleware),
});

sagaMidleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
