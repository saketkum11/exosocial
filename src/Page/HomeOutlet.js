import { Outlet } from "react-router-dom";
import { SideBar } from "../component/SideBar";
import { Follow } from "../component/Follow";
const HomeOutlet = () => {
  return (
    <>
      <main className="grid grid-cols-12 gap-4 mt-3">
        <SideBar />
        <Outlet />
        <Follow />
      </main>
    </>
  );
};
export { HomeOutlet };
