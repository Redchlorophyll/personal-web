import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  theme: String
}

const initialState: ThemeState = {
  theme: 'light',
}

export const themeSlice = createSlice({
  name: 'themeConfig',
  initialState,
  reducers: {
    toggleLight: (state) => {
      console.log('test');
      state.theme = 'light';
    },
    toggleDark: (state) => {
      state.theme = 'dark';
    },
    setTheme: (state, action: PayloadAction<String>) => {
      state.theme = action.payload
    },
    localStorageTheme: (state) => {
      if (localStorage.getItem('theme') === 'dark') {
        state.theme = 'dark';
      }
      else if (localStorage.getItem('theme') === 'light'
      || !localStorage.getItem('theme')) {
        state.theme = 'light';
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleLight, toggleDark, setTheme, localStorageTheme } = themeSlice.actions

export default themeSlice.reducer