import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { configReducer } from './reducers/configSlice';

const reducer = combineReducers({
  config: configReducer,
});

export const store = configureStore({
  reducer,
});

export type Reducers = ReturnType<typeof reducer>;
