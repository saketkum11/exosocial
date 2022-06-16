import { Routes, Route } from "react-router-dom";
import {
  BookMark,
  Explore,
  Home,
  HomeOutlet,
  Landing,
  NotFound,
  Profile,
  Signin,
} from "../Page";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route element={<HomeOutlet />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<BookMark />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
