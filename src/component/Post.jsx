import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features/posts/postSlice";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.post);
  const { token, user } = useSelector((store) => store.auth);
  const { avatarURL, username, firstName, lastName } = user;
  const [feed, setFeed] = useState({
    content: "",
  });

  const handlePostChange = (value) => {
    setFeed({ ...feed, content: value });
  };

  const handleCreatePost = (postData, authToken) => {
    dispatch(createPost({ postData, authToken }));
    setFeed({ ...feed, content: "" });
  };

  return (
    <>
      <section className="bg-white  flex p-4 gap-2">
        <img src={avatarURL} className="rounded-full w-10 h-10  " alt="" />

        <form
          className="flex flex-col w-full "
          onSubmit={(e) => {
            e.preventDefault();
            handleCreatePost(feed, token);
          }}
        >
          <textarea
            required
            value={feed.content}
            onChange={(event) => handlePostChange(event.target.value)}
            placeholder="start your post..."
            className=" h-20 bg-gray-100 px-2 "
          />

          <div className="flex justify-between ">
            <button
              type="submit"
              className="bg-indigo-800 text-white  py-2 px-5 mt-2 "
            >
              Post
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export { Post };
