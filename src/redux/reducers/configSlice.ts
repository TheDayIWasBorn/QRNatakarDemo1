import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConfigState {
  theme: 'dark' | 'light';
}

const initialState: ConfigState = {
  theme: 'dark',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ConfigState['theme']>) {
      state.theme = action.payload;
    },
  },
});

export const configActions = configSlice.actions;
export const configReducer = configSlice.reducer;
