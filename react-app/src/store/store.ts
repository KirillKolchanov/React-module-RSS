import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  searchCharacters: [],
  error: null,
  isLoading: false,
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_CHARACTERS':
      return { ...state, searchCharacters: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_IS_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: cardsReducer,
});
