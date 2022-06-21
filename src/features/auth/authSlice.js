import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const tokenState = {
  token: localStorage.getItem("token"),
  isAuth: localStorage.getItem("token") ? true : false,
};

console.log(tokenState);
const initialState = {
  message: "",
  error: false,
  loader: false,
  success: false,
};

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ email, password, firtName, lastName }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firtName,
        lastName,
      });
      console.log("response from auth slice", response);
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      console.log("from signin", response);
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      console.error(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
