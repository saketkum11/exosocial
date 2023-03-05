import { ExploreTab } from "../../component/ExploreTab";
import { Card } from "../../component/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPost } from "../../features/posts/postSlice";
import { filter } from "../../utils/filterSort";

const Explore = () => {
  const { posts } = useSelector((store) => store.post);
  const { sort } = useSelector((store) => store.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const sortedByRecent = filter(posts, sort);
  const sortedByDate = filter(sortedByRecent, sort);
  const sortedByTrending = filter(sortedByDate, sort);

  return (
    <>
      <div className=" sm:col-span-3 md:col-span-2">
        <div className=" px-3 text-left text-lg font-bold">
          <span>Explore</span>
        </div>
        <ExploreTab />
        {[...sortedByDate]?.map((post) => {
          return <Card post={post} key={post._id} />;
        })}
      </div>
    </>
  );
};
export { Explore };
