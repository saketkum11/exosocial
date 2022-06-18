import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
