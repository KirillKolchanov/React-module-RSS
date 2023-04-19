import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from '../api/charactersApi';
import charactersReducer from './reducers/charactersSlice';
import carsSlice from './reducers/carsSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    cars: carsSlice,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});
