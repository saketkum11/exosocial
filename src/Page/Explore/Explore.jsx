import { ExploreTab } from "../../component/ExploreTab";
import { Card } from "../../component/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPost } from "../../features/posts/postSlice";
const Explore = () => {
  const { posts } = useSelector((store) => store.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, [posts]);
  return (
    <>
      <div className="col-start-4 col-end-10 ">
        <div className=" px-3 text-left text-lg font-bold">
          <span>Explore</span>
        </div>
        <ExploreTab />
        {posts.map((post) => {
          return <Card post={post} key={post._id} />;
        })}
      </div>
    </>
  );
};
export { Explore };
