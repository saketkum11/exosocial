import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/posts/postSlice";
const store = configureStore({
  reducer: { auth: authReducer, post: postReducer },
});
export { store };
