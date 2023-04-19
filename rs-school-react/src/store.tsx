import { configureStore } from '@reduxjs/toolkit';
import { characters } from '../src/redux/reducer';

const store = configureStore({
  reducer: characters,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
