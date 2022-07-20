import { Routes, Route } from "react-router-dom";
import {
  BookMark,
  Explore,
  Home,
  HomeOutlet,
  Landing,
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
        <Route path="/" element={<Landing />} />
        <Route element={<HomeOutlet />}>
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/saved" element={<BookMark />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:username" element={<Profile />} />
          </Route>
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
