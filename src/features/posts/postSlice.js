import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allUser: [],
  posts: [],
};

export const getUser = createAsyncThunk("post/getUser", async () => {
  try {
    const response = await axios.get("/api/users");
    return response.data.users;
  } catch (error) {
    console.error(error);
  }
});

export const getAllPost = createAsyncThunk("post/getAllPost", async () => {
  try {
    const response = await axios.get("/api/posts");
    console.log("from getAll Post ", response.data.posts);
    return response.data.posts;
  } catch (error) {
    console.error(error);
  }
});
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

export const createPost = createAsyncThunk(
  "post/createPost",
  async (post, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "/api/posts",
        { post },
        {
          headers: {
            authorization: token,
          },
        }
      );

      console.log("from create data", response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deletePost = createAsyncThunk("post/deletePost", async () => {
  try {
    const response = await axios.get("/api/posts/:postId", {
      headers: {
        authorization: encodedToken,
      },
    });
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
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      // for createpost
      .addCase(createPost.fulfilled, (state, action) => {
        console.log("from create post fullfilled", action);
        //  state.posts = action.payload.posts;
      });
  },
});

export default postSlice.reducer;
console.log("slice", postSlice);
