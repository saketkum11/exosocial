import { ExploreTab } from "../../component/ExploreTab";
import { PostCard } from "../../component/PostCard";

const Explore = () => {
  return (
    <>
      <div className="col-start-4 col-end-10 ">
        <div className=" px-3 text-left text-lg font-bold">
          <span>Explore</span>
        </div>
        <ExploreTab />
      </div>
    </>
  );
};
export { Explore };
