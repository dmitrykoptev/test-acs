import { createSlice } from "@reduxjs/toolkit";

const initialMenu = {
  categories: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialMenu,
  reducers: {
    replaceMenu(state, action) {
      return {
        ...state,
        categories: action.payload.categories,
      };
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice.reducer;
