import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

export const getAllBookmark = createAsyncThunk(
  "bookmark/getAllBookmark",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/users/bookmark", {
        headers: { authorization: token },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      rejectWithValue(error);
    }
  }
);
export const addBookmark = createAsyncThunk(
  "bookmark/addBookmark",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}/`,
        {},
        {
          headers: { authorization: authToken },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      rejectWithValue(error);
    }
  }
);
export const removeBookmark = createAsyncThunk(
  "bookmark/removeBookmark",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}/`,
        {},
        {
          headers: { authorization: authToken },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      rejectWithValue(error);
    }
  }
);
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBookmark.pending, (state) => {})
      .addCase(getAllBookmark.fulfilled, (state, { payload }) => {
        state.bookmarks = payload.bookmarks;
      })
      .addCase(getAllBookmark.rejected, (state) => {})

      .addCase(addBookmark.pending, (state) => {})
      .addCase(addBookmark.fulfilled, (state, { payload }) => {
        state.bookmarks = payload.bookmarks;
      })
      .addCase(addBookmark.rejected, (state) => {})

      .addCase(removeBookmark.pending, (state) => {})
      .addCase(removeBookmark.fulfilled, (state, { payload }) => {
        state.bookmarks = payload.bookmarks;
      })
      .addCase(removeBookmark.rejected, (state) => {});
  },
});

export default bookmarkSlice.reducer;
