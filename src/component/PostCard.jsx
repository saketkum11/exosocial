import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features/posts/postSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { EditPost } from "./EditPost";

const PostCard = ({ post }) => {
  const {
    content,
    profilename,
    username,
    _id,
    dislikedBy,
    likedBy,
    likeCount,
    avatarURL,
    firstName,
    lastName,
  } = post;

  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);
  const { posts } = useSelector((store) => store.post);
  const [editFlag, setEditFlag] = useState(false);
  const handleDeletePost = (postId, authToken) => {
    dispatch(deletePost({ postId, authToken }));
    toast.error("deleted post");
  };

  return (
    <>
      <div className="col-start-4 col-end-10">
        <div className="relative flex flex-col flex-wrap">
          <section className="p-5 bg-white my-3 wt-full">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between  py-2">
                <div className="flex items-center ">
                  <img
                    src={avatarURL}
                    className="h-10 w-10 rounded-full   object-cover bg-indigo-800 mr-2"
                  />
                  <span>
                    {firstName}

                    {lastName}
                    <small>@{username}</small>
                  </span>
                </div>
                {user.username === username && (
                  <button onClick={() => setEditFlag((flag) => !flag)}>
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                )}

                {editFlag && <EditPost setEditFlag={setEditFlag} post={post} />}
              </div>

              <p className=" py-5 text-left">{content}</p>

              <div className="flex justify-between py-2">
                <button>
                  <i className="fa-solid fa-heart"></i>
                </button>
                <button>
                  <i className="fa-solid fa-message"></i>
                </button>

                <button onClick={() => handleDeletePost(_id, token)}>
                  <i className="fa-solid fa-trash"></i>
                </button>

                <button>
                  <i className="fa-solid fa-bookmark"></i>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export { PostCard };
