import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppLanguage } from '../constant';

export interface GeneralState {
  token: string;
  language: string;
}

const initialState: GeneralState = {
  token: '',
  language: AppLanguage.english,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    updateUserToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
    updateAppLanguage: (state, action: PayloadAction<any>) => {
      state.language = action.payload;
    },
  },
});

export const { updateUserToken, updateAppLanguage } = generalSlice.actions;

export default generalSlice.reducer;
