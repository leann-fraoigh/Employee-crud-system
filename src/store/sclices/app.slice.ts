import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../../model';

export interface InitialState {
  data: Employee[];
  loaded: boolean; // Статус загрузки приложения
  isError: boolean; // Сообщение об ошибки
}

const initialState: InitialState = {
  data: [],
  loaded: false,
  isError: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<Employee[]>): void {
      state.data = action.payload;
      state.loaded = true;
    },
    setErrorStatus(state, action: PayloadAction<boolean>): void {
      state.isError = action.payload;
      state.loaded = true;
    },
  },
});

export const { setData, setErrorStatus } = appSlice.actions;
export default appSlice.reducer;