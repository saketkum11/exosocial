import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../component/Card";
import { Post } from "../../component/Post";
import { getAllPost } from "../../features/posts/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.post);

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return (
    <>
      <div className="col-start-4 col-end-10">
        <Post />
        {posts?.map((post) => {
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
