import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  loading: false,
};

export const getAllPost = createAsyncThunk("post/getAllPost", async () => {
  try {
    const response = await axios.get("/api/posts");
    return response.data;
  } catch (error) {
    console.error(error);
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

export const addComment = createAsyncThunk(
  "post/addComment",
  async ({ postId, commentData, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        {
          commentData,
        },
        {
          headers: { authorization: authToken },
        }
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const editComment = createAsyncThunk(
  "post/editComment",
  async (
    { postId, commentId, authToken, commentData },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        { commentData },
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
export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async ({ commentId, postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `/api/comments/delete/${postId}/${commentId}`,
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
export const upVoteComment = createAsyncThunk(
  "post/upVoteComment",
  async ({ commentId, postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/upvote/${postId}/${commentId}`,
        {},
        {
          headers: {
            authorization: authToken,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      rejectWithValue(error);
    }
  }
);

export const downVoteComment = createAsyncThunk(
  "post/downVoteComment",
  async ({ commentId, postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/downvote/${postId}/${commentId}`,
        {},
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

export const likePost = createAsyncThunk(
  "post/likePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
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
export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async ({ postId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
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
      .addCase(getAllPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.loading = false;
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
        state.posts = payload.posts;
      })
      .addCase(editPost.rejected, (state) => {})

      // add comment
      .addCase(addComment.pending, (state) => {})
      .addCase(addComment.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(addComment.rejected, (state) => {})

      //delete comment
      .addCase(deleteComment.pending, (state) => {})
      .addCase(deleteComment.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(deleteComment.rejected, (state) => {})

      //edit comment
      .addCase(editComment.pending, (state) => {})
      .addCase(editComment.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(editComment.rejected, (state) => {})

      // upvote comment
      .addCase(upVoteComment.pending, (state) => {})
      .addCase(upVoteComment.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(upVoteComment.rejected, (state) => {})

      // downvote comment
      .addCase(downVoteComment.pending, (state) => {})
      .addCase(downVoteComment.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(downVoteComment.rejected, (state) => {})

      // like comment
      .addCase(likePost.pending, (state) => {})
      .addCase(likePost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(likePost.rejected, (state) => {})

      //dislike comment
      .addCase(dislikePost.pending, (state) => {})
      .addCase(dislikePost.fulfilled, (state, { payload }) => {
        state.posts = payload.posts;
      })
      .addCase(dislikePost.rejected, (state) => {});
  },
});

export default postSlice.reducer;
