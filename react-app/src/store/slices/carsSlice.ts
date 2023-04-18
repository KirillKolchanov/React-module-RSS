import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICarSchema } from '../../models';

interface CarsState {
  carsDatabase: ICarSchema[];
}

const initialState = {
  carsDatabase: [],
} as CarsState;

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars(state, action: PayloadAction<ICarSchema[]>) {
      state.carsDatabase = action.payload;
    },
  },
});

export const { setCars } = carSlice.actions;
export default carSlice.reducer;
