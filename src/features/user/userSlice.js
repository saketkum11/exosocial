import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allUser: [],
  individualUser: null,
};

export const getAllUser = createAsyncThunk(
  "user/getAllUser",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/api/users");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getIndividualUser = createAsyncThunk(
  "user/getIndividualUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state) => {})
      .addCase(getAllUser.fulfilled, (state, { payload }) => {
        console.log("from getAluser", payload);
        state.allUser = payload.users;
      })
      .addCase(getAllUser.rejected, (state) => {})
      .addCase(getIndividualUser.pending, (state) => {})
      .addCase(getIndividualUser.fulfilled, (state, { payload }) => {
        console.log("from getIndividualUser", payload);
        state.allUser = payload.user;
      })
      .addCase(getIndividualUser.rejected, (state) => {});
  },
});

export default userSlice.reducer;
