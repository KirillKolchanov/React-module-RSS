import { AxiosError } from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../models';

interface CharactersState {
  characters: ICharacter[];
  searchValue: string;
  isLoading: boolean;
  error: AxiosError | null;
  isModalOpen: boolean;
}

const initialState = {
  characters: [],
  searchValue: '',
  isLoading: false,
  error: null,
  isModalOpen: false,
} as CharactersState;

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    toggleCharacterDetailsModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { setSearchValue, toggleCharacterDetailsModal } = charactersSlice.actions;
export default charactersSlice.reducer;
