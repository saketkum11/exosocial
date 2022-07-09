import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

export const getAllPost = createAsyncThunk("post/getAllPost", async () => {
  try {
    const response = await axios.get("/api/posts");
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getUserPost = createAsyncThunk(
  "user/getUserPost",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/posts/user/${username}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPostById = createAsyncThunk(
  "post/getPostById",
  async ({ postId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/posts/${postId}`);
      return response.data;
    } catch (error) {
      return error;
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
      console.log("from created", response.data);
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

export const editPost = createAsyncThunk(
  "post/editPost",
  async ({ postData, postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/edit/${postId}`,
        {
          postData,
        },
        {
          headers: {
            authorization: authToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.pending, (state) => {})
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(getAllPost.rejected, (state) => {})

      // get user post
      .addCase(getUserPost.pending, (state) => {})
      .addCase(getUserPost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(getUserPost.rejected, (state) => {})

      /// create post
      .addCase(createPost.pending, (state) => {})
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(createPost.rejected, (state) => {})

      // deletePost
      .addCase(deletePost.pending, (state) => {})
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(deletePost.rejected, (state) => {})
      // edit Post
      .addCase(editPost.pending, (state) => {})
      .addCase(editPost.fulfilled, (state, { payload }) => {
        console.log("action of editpost", payload);
        state.posts = payload.posts;
      })
      .addCase(editPost.rejected, (state) => {});
  },
});

export default postSlice.reducer;
