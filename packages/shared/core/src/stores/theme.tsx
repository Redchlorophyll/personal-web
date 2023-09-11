import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'themeConfig',
  initialState,
  reducers: {
    toggleLight: (state) => {
      state.theme = 'light';
    },
    toggleDark: (state) => {
      state.theme = 'dark';
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    localStorageTheme: (state) => {
      if (localStorage.getItem('theme') === 'dark') {
        state.theme = 'dark';
      } else if (
        localStorage.getItem('theme') === 'light' ||
        !localStorage.getItem('theme')
      ) {
        state.theme = 'light';
      }
    },
  },
});
