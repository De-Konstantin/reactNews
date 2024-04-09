import { newsApi } from '@/store/services/newsApi';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  //   news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
});
