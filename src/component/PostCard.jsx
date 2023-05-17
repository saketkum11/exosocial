import { useDispatch, useSelector } from "react-redux";
import { dislikePost, likePost } from "../features/posts/postSlice";
import { toast } from "react-toastify";
import { useState } from "react";
import { EditPost } from "./EditPost";
import { PostComment } from "./PostComment";
import moment from "moment";
import {
  addBookmark,
  removeBookmark,
} from "../features/bookmark/bookmarkSlice";
import { NavLink } from "react-router-dom";
const PostCard = ({ post }) => {
  const {
    content,
    username,
    createdAt,
    likes,
    avatarURL,
    firstName,
    lastName,
  } = post;

  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);
  const { bookmarks } = useSelector((store) => store.bookmark);
  const { posts } = useSelector((store) => store.post);
  const { allUser } = useSelector((store) => store.user);
  const [editFlag, setEditFlag] = useState(false);
  const [commentFlag, setCommentFlag] = useState(false);

  const dataBaseUser = allUser?.find(
    (dbUser) => dbUser.username === post.username
  );

  const postData = posts.some(
    (postData) => postData.username === user.username
  );

  const handleLikePost = (_id, token) => {
    dispatch(likePost({ postId: _id, authToken: token }));
  };
  const handleDislikePost = (_id, token) => {
    dispatch(dislikePost({ postId: _id, authToken: token }));
  };
  const handleBookmark = (_id, token) => {
    dispatch(addBookmark({ postId: _id, authToken: token }));
    toast.success("Successfully AddBookmark");
  };
  const handleRemoveBookmark = (_id, token) => {
    dispatch(removeBookmark({ postId: _id, authToken: token }));
    toast.success("removed bookmark");
  };
  return (
    <>
      <div className="sm:col-span-2 col-span-1">
        <div className="relative flex flex-col flex-wrap">
          <section className="p-5 bg-white my-3 wt-full">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between  py-2">
                <div className="flex items-center ">
                  <img
                    src={avatarURL}
                    className="h-10 w-10 rounded-full   object-cover bg-indigo-800 mr-2"
                  />
                  <div className="flex gap-2 items-center">
                    <NavLink
                      to={`/profile/${username}`}
                      className="flex gap-2 hover:text-indigo-400 cursor-pointer hover:underline"
                    >
                      <span>{firstName}</span>
                      <span>{lastName}</span>
                    </NavLink>

                    <small>@{username}</small>
                    <span>{moment(Date.parse(createdAt)).fromNow()}</span>
                  </div>
                </div>
                {user?.username === username && (
                  <button onClick={() => setEditFlag((flag) => !flag)}>
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                )}

                {editFlag && <EditPost setEditFlag={setEditFlag} post={post} />}
              </div>

              <p className=" py-5 text-left">{content}</p>

              <div className="flex justify-between py-2">
                {likes?.likedBy.find(
                  (liked) => liked.username === user.username
                ) ? (
                  <button
                    onClick={() => handleDislikePost(post._id, token)}
                    className="text-red-700"
                  >
                    <i className="fa-solid fa-heart px-2">
                      <span>{post?.likes.likeCount}</span>
                    </i>
                  </button>
                ) : (
                  <button onClick={() => handleLikePost(post._id, token)}>
                    <i className="fa-solid fa-heart px-2">
                      <span>{post?.likes.likeCount}</span>
                    </i>
                  </button>
                )}

                <button onClick={() => setCommentFlag((flag) => !flag)}>
                  <i className="fa-solid fa-message"></i>
                </button>

                {bookmarks?.find((bookmark) => bookmark._id === post._id) ? (
                  <button
                    onClick={() => handleRemoveBookmark(post._id, token)}
                    className="text-indigo-500"
                  >
                    <i className="fa-solid fa-bookmark"></i>
                  </button>
                ) : (
                  <button onClick={() => handleBookmark(post._id, token)}>
                    <i className="fa-solid fa-bookmark"></i>
                  </button>
                )}
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
