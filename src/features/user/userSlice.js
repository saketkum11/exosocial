import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allUser: [],
  individualUser: {},
  follower: [],
};

export const getAllUser = createAsyncThunk(
  "user/getAllUser",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`/api/users`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getIndividualUser = createAsyncThunk(
  "user/getIndividualUser",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/users/${username}`);
      console.log(response.data);
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

export const follow = createAsyncThunk(
  "user/follow",
  async ({ followUserId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: {
            authorization: authToken,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      rejectWithValue(error);
    }
  }
);
export const unFollow = createAsyncThunk(
  "user/unFollow",
  async ({ UnfollowId, authToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${UnfollowId}`,
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

const updateFollowing = (users, followingUser) => {
  const IsUser = users?.find(
    (user) => user?.username === followingUser?.username
  );

  if (IsUser) {
    users = [...users]?.map((eachUser) =>
      eachUser.username === IsUser.username ? followingUser : eachUser
    );
  }
  return users;
};

const updateFollowedUser = (users, followedUser) => {
  const IsUser = users.find((user) => user._id === followedUser._id);

  if (IsUser) {
    users = [...users]?.map((eachUser) =>
      eachUser._id === IsUser._id ? followedUser : eachUser
    );
  }
  console.log(IsUser);
  return users;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUser.pending]: (state) => {},
    [getAllUser.fulfilled]: (state, { payload }) => {
      state.allUser = payload.users;
    },
    [getAllUser.rejected]: (state) => {},

    // individual user
    [getIndividualUser.pending]: (state) => {},
    [getIndividualUser.fulfilled]: (state, { payload }) => {
      state.individualUser = payload.user;
    },

    // editUserProfile
    [editUserProfile.pending]: (state) => {},
    [editUserProfile.fulfilled]: (state, { payload }) => {
      state.individualUser = payload.user;
    },

    //follow

    [follow.pending]: (state) => {},
    [follow.fulfilled]: (state, action) => {
      const { user, followUser } = action.payload;
      state.allUser = updateFollowing(current(state).allUser, user);
      state.allUser = updateFollowedUser(current(state).allUser, followUser);
      console.log("userSlice", state, action);
    },
    // unfollow
    [unFollow.pending]: (state) => {},
    [unFollow.fulfilled]: (state, action) => {
      console.log("userSlice", state, action);
      state.follower = action.payload;
    },
  },
});

export default userSlice.reducer;
