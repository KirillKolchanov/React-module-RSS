import { AxiosError } from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../models';

interface CharactersState {
  characters: ICharacter[];
  searchValue: string;
  isLoading: boolean;
  error: AxiosError | null;
}

const initialState = {
  characters: [],
  searchValue: '',
  isLoading: false,
  error: null,
} as CharactersState;

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  // fetchCharacters,
  // fetchCharactersSuccessful,
  // fetchCharactersFailure,
  setSearchValue,
} = charactersSlice.actions;
export default charactersSlice.reducer;
