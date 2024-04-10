import { newsApi } from '@/entities/news/api/newsApi';
import { combineReducers } from '@reduxjs/toolkit';
import { newsReducer } from '@/entities/news/modal/newsSlice';
export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
});
