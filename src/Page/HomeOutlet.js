import { Outlet } from "react-router-dom";
import { SideBar } from "../component/SideBar";
import { Follow } from "../component/Follow";
const HomeOutlet = () => {
  return (
    <>
      <main className="grid sm:grid-cols-3 lg:grid-cols-4 mt-3 grid-cols-1 gap-7 mx-12">
        <SideBar />
        <Outlet />
        <Follow />
      </main>
    </>
  );
};
export { HomeOutlet };
