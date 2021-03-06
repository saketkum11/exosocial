import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sort: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterAllPost: (state, { payload }) => {
      state.sort = payload;
    },
  },
});
export default filterSlice.reducer;

export const { filterAllPost } = filterSlice.actions;
