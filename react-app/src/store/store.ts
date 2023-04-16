import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from '../api/charactersApi';
import charactersReducer from './slices/charactersSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});
