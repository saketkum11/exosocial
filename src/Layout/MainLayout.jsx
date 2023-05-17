import { Outlet } from "react-router-dom";
import { Follow } from "../Page";

const MainLayout = () => {
  return (
    <>
      <div className="">
        <Outlet />
        <Follow />
      </div>
    </>
  );
};

export { MainLayout };
