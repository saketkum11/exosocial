import { useDispatch, useSelector } from "react-redux";
import { deletePost, dislikePost, likePost } from "../features/posts/postSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { EditPost } from "./EditPost";
import { PostComment } from "./PostComment";
import moment from "moment";
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
    comments,
    createdAt,
  } = post;

  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);
  const { posts } = useSelector((store) => store.post);
  const [editFlag, setEditFlag] = useState(false);
  const [commentFlag, setCommentFlag] = useState(false);

  const handleDeletePost = (postId, authToken) => {
    dispatch(deletePost({ postId, authToken }));
    toast.error("deleted post");
  };
  const handleLikePost = (_id, authToken) => {
    dispatch(likePost({ postId: _id, authToken }));
  };
  const handleDislikePost = (_id, authToken) => {
    dispatch(dislikePost({ postId: _id, authToken }));
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
                  <span>{moment(Date.parse(createdAt)).fromNow()}</span>
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
                {post?.likes.likedBy.find(
                  (liked) => liked.username === user.username
                ) ? (
                  <button
                    onClick={() => handleDislikePost(_id, token)}
                    className="text-red-700"
                  >
                    <i className="fa-solid fa-heart ">
                      <span>{post?.likes.likeCount}</span>
                    </i>
                  </button>
                ) : (
                  <button onClick={() => handleLikePost(_id, token)}>
                    <i className="fa-solid fa-heart ">
                      <span>{post?.likes.likeCount}</span>
                    </i>
                  </button>
                )}

                <button onClick={() => setCommentFlag((flag) => !flag)}>
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
            {commentFlag && (
              <PostComment post={post} commentFlag={commentFlag} />
            )}
          </section>
        </div>
      </div>
    </>
  );
};
export { PostCard };
