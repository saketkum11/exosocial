import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  token: localStorage.getItem("token") || null,
};

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ username, password, firstName, lastName }, thunkAPI) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username: username,
        password: password,
        firstname: firstName,
        lastname: lastName,
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
        username: username,
        password: password,
      });
      console.log(response.data);
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
      .addCase(signUpUser.pending, (state) => {})
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload.createdUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", state.token);
      })
      .addCase(signUpUser.rejected, (state) => {})
      .addCase(signInUser.pending, (state) => {})
      .addCase(signInUser.fulfilled, (state, action) => {
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
