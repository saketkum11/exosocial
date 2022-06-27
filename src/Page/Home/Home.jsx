import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../component/Card";
import { Post } from "../../component/Post";
import { PostModal } from "../../component/PostModal";
import { getAllPost } from "../../features/posts/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.post);

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  console.log("from home card", posts);

  return (
    <>
      <div className="col-start-4 col-end-10">
        <Post />
        {posts.map((post) => {
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
