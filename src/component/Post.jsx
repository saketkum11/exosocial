import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features/posts/postSlice";

const Post = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.post);
  const { token, user } = useSelector((store) => store.auth);
  const { avatarURL, username, firstName, lastName } = user;
  const [feed, setFeed] = useState({
    avatarURL,
    username,
    firstName,
    lastName,
    content: "",
  });

  const handlePostChange = (value) => {
    setFeed({ ...feed, content: value });
  };

  const handleCreatePost = (postData, authToken) => {
    dispatch(createPost({ postData, authToken }));
  };

  return (
    <>
      <section className="bg-white  flex p-4">
        <img src={user.avatarURL} className="rounded-full w-10 h-10  " alt="" />

        <div className="flex flex-col w-full ">
          <textarea
            required
            value={feed.content}
            onChange={(event) => handlePostChange(event.target.value)}
            placeholder="start your post..."
            className=" h-20 bg-gray-100 px-2 "
          />

          <div className="flex justify-between ">
            <div className="flex">
              <button disabled className="mr-1">
                <i className="fa-solid fa-image"></i>
              </button>
              <button disabled className="mr-1">
                <i className="fa-solid fa-video"></i>
              </button>
              <button disabled className="mr-1">
                <i className="fa-solid fa-face-smile"></i>
              </button>
            </div>
            <button
              onClick={() => handleCreatePost(feed, token)}
              className="bg-indigo-800 text-white  py-2 px-5 mt-2 "
            >
              Post
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export { Post };
