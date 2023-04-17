import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { characters } from '../src/redux/reducer';

const store = configureStore({
  reducer: combineReducers({ characters }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
