import { configureStore } from '@reduxjs/toolkit';
import { getDefaultNormalizer } from '@testing-library/dom';
import counterReducer from 'features/counter/counterSlice';
import { userReducer } from 'features/user';

const rootReducer = combineReducers({ userReducer })

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
