import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  token: localStorage.getItem("token") || " ",
};

console.log("initialstate", initialState);
export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ username, password, firstName, lastName }, thunkAPI) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        password,
        firstName,
        lastName,
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    reset: (state) => {
      state.token = null;
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // signup
      .addCase(signUpUser.pending, (state) => {})
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload.createdUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", state.token);
      })
      .addCase(signUpUser.rejected, (state) => {})
      // login
      .addCase(signInUser.pending, (state) => {})
      .addCase(signInUser.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("token", state.token);
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(signInUser.rejected, (state) => {});
  },
});

export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
