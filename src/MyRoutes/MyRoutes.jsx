import { Routes, Route } from "react-router-dom";
import {
  BookMark,
  Explore,
  Home,
  HomeOutlet,
  NotFound,
  Profile,
  RequireAuth,
  Signin,
  Signup,
} from "../Page";
import Mockman from "mockman-js";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeOutlet />}>
          <Route path="explore" element={<Explore />} />
          <Route element={<RequireAuth />}>
            <Route index element={<Home />} />
            <Route path="saved" element={<BookMark />} />
          </Route>
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:username" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
