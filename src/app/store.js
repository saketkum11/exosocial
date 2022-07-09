import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/posts/postSlice";
import userReducer from "../features/user/userSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer,
  },
});
export { store };
