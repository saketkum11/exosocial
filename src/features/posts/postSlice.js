import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

export const getAllPost = createAsyncThunk(
  "post/getAllPost",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get("/api/posts");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ postData, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
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
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: authToken,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const individualPost = createAsyncThunk(
  "post/individualPost",
  async () => {
    try {
      const response = await axios.get("/api/posts/:postId");
      return response.data.post;
    } catch (error) {
      console.er(error);
    }
  }
);
export const userPost = createAsyncThunk("post/userPost", async () => {
  try {
    const response = await axios.get("/api/posts/user/:username");
    return response.data.posts;
  } catch (error) {
    console.error(error);
  }
});

export const updatePost = createAsyncThunk("post/updatePost", async () => {
  try {
    const response = await axios.get("/api/posts/edit/:postId", {
      headers: {
        authorization: encodedToken,
      },
    });
    return response.data.posts;
  } catch (error) {
    console.error(error);
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.pending, (state) => {})
      .addCase(getAllPost.fulfilled, (state, action) => {
        console.log("from getAllPost ", action);
      });
  },
});

export default postSlice.reducer;
