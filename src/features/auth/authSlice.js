import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  message: "",
  isError: false,
  isLoader: false,
  isSuccess: false,
  user: localStorage.getItem("user") || null,
  token: localStorage.getItem("token") || null,
};

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ email, password, firstName, lastName }, thunkAPI) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username: email,
        password: password,
        firstname: firstName,
        lastname: lastName,
      });
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString() ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username: email,
        password: password,
      });
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.toString() ||
        error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await localStorage.removeItem("token");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = false;
      state.isLoader = false;
      state.isSuccess = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        console.log("action", action);
        state.isLoader = false;
        state.isSuccess = true;
        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("token", state.token);
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.message = action.payload;
      })
      .addCase(signInUser.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        console.log("action", action);
        state.isLoader = false;
        state.isSuccess = true;
        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("token", state.token);
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        state.message = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

console.log(authSlice);
