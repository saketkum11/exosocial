import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../component/Card";
import { Post } from "../../component/Post";
import { getAllPost } from "../../features/posts/postSlice";
import { sortPost } from "../../utils/filter";
import { useTitle } from "../../utils/useTitle";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.post);
  useTitle("home");
  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const sortedPost = sortPost(posts);

  return (
    <>
      <div className=" sm:col-span-3 md:col-span-2 z-0">
        <Post />
        {[...sortedPost].map((post) => {
          return (
            <>
              <Card key={post._id} post={post} />
            </>
          );
        })}
      </div>
    </>
  );
};
export { Home };
