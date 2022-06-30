import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allUser: [],
  individualUser: {},
};

export const getAllUser = createAsyncThunk(
  "user/getAllUser",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`/api/users`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getIndividualUser = createAsyncThunk(
  "user/getIndividualUser",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/users/${username}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editUserProfile = createAsyncThunk(
  "user/editUserProfile",
  async ({ userData, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/edit`,
        { userData },
        {
          headers: {
            authorization: authToken,
          },
        }
      );
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
        state.allUser = payload.users;
      })
      .addCase(getAllUser.rejected, (state) => {})

      .addCase(getIndividualUser.pending, (state) => {})
      .addCase(getIndividualUser.fulfilled, (state, { payload }) => {
        state.individualUser = payload.user;
      })
      .addCase(getIndividualUser.rejected, (state) => {})

      // for edit edit user details
      .addCase(editUserProfile.pending, (state) => {})
      .addCase(editUserProfile.fulfilled, (state, { payload }) => {
        state.individualUser = payload.user;
      })
      .addCase(editUserProfile.rejected, (state) => {});
  },
});

export default userSlice.reducer;
