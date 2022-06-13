import { Routes, Route } from "react-router-dom";
import { Explore, Home, Landing, Signin } from "../Page";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signin />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
