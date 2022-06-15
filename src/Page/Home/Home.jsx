import { Card } from "../../component/Card";
import { Follow } from "../../component/Follow";
import { SideBar } from "../../component/SideBar";

const Home = () => {
  return (
    <>
      <main className="grid grid-cols-12 gap-4 mt-3">
        <SideBar />
        <Card />
        <Follow />
      </main>
    </>
  );
};
export { Home };
