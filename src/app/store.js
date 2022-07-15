import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/posts/postSlice";
import userReducer from "../features/user/userSlice";
import bookmarkReducer from "../features/bookmark/bookmarkSlice";
import filterReducer from "../features/filters/filterSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    bookmark: bookmarkReducer,
    filter: filterReducer,
  },
});
export { store };
