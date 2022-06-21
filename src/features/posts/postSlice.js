import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  token: localStorage.getItem("token") || null,
  isAuth: localStorage.getItem("token") ? true : false,
};

export const signUpUser = createAsyncThunk(
  "post/singUpUser",
  async ({ email, password, firtName, lastName }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firtName,
        lastName,
      });
    } catch (error) {}
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default postSlice.reducer;
