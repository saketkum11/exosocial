import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  message: "",
  isError: false,
  isLoader: false,
  isSuccess: false,
  isAuth: false,
  user: user ? user : null,
};

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ email, password, firstName, lastName }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username: email,
        password: password,
        firstname: firstName,
        lastname: lastName,
      });
      console.log("from signup user", response);
    } catch (error) {
      console.error(error);
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ email, password }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username: email,
        password: password,
      });
      console.log("from signin user", response);
    } catch (error) {
      console.error(error);
    }
  }
);

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
        state.isLoader = false;
        state.isSuccess = true;
        state.user = action.payload.encodedToken;
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(signUpUser.rejected, (state) => {})
      .addCase(signInUser.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoader = false;
        state.isSuccess = true;
        state.user = action.payload.data.encodedToken;

        localStorage.setItem("user", state.user);
        // localStorage.setItem("user", JSON.stringify(state.user));
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
