import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  deleteComment,
  downVoteComment,
  editComment,
  upVoteComment,
} from "../features/posts/postSlice";

const PostComment = ({ post }) => {
  const dispatch = useDispatch();
  const [editCommentModal, setEditCommentModal] = useState(false);
  const [newComment, setNewComment] = useState({
    text: "",
  });
  const { token, user } = useSelector((store) => store.auth);
  const { _id, comments } = post;
  const postId = _id;

  const handleAddComment = (_id, commentData, authToken) => {
    dispatch(addComment({ commentData, postId: _id, authToken }));
    setNewComment({ ...newComment, text: "" });
  };

  const handleUpdateComment = (commentId, _id, authToken, commentData) => {
    dispatch(editComment({ commentId, postId: _id, authToken, commentData }));
  };

  const handleDeleteComment = (commentId, postId, authToken) => {
    dispatch(deleteComment({ commentId, postId, authToken }));
  };

  const handleUpVoteComment = (_id, postId, token) => {
    dispatch(upVoteComment({ commentId: _id, postId, authToken: token }));
  };

  const handleDownVoteComment = (commentId, postId, token) => {
    dispatch(downVoteComment({ commentId, postId, authToken: token }));
  };
  return (
    <>
      {[...comments].map((comment) => {
        const { votes } = comment;

        return (
          <>
            <div key={comment._id} className="bg-white px-1 border-t  border-b">
              <div className="flex items-center  my-2">
                <img
                  src={comment.avatarURL}
                  className="h-10 w-10 rounded-full   object-cover bg-indigo-800 mr-2"
                  alt=""
                />
                <div>
                  <strong>
                    {comment.firstName}
                    {comment.lastName}
                  </strong>

                  <button
                    onClick={() => {
                      const commentId = comment?._id;
                      handleUpVoteComment(commentId, postId, token);
                    }}
                    className="flex items-center text-green-600"
                  >
                    <i className="fa-solid fa-sort-up "></i>
                    <span>{votes.upvotedBy.length}</span>
                  </button>
                  <button
                    onClick={() => {
                      const commentId = comment?._id;
                      handleDownVoteComment(commentId, postId, token);
                    }}
                    className="flex items-center text-red-600"
                  >
                    <i className="fa-solid fa-sort-down"></i>
                    <span>{votes.downvotedBy.length}</span>
                  </button>
                </div>
                <p className="ml-3">{comment.text}</p>
                {comment.username === user.username && (
                  <>
                    <button
                      onClick={() => setEditCommentModal((flag) => !flag)}
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      onClick={() => {
                        const commentId = comment?._id;
                        handleDeleteComment(commentId, postId, token);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </>
                )}
                {editCommentModal && (
                  <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                  >
                    <div className="fixed inset-0 bg-white-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                      <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <textarea
                                cols="30"
                                rows="10"
                                onChange={(e) =>
                                  setNewComment({
                                    ...newComment,
                                    text: e.target.value,
                                  })
                                }
                              ></textarea>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                              onClick={() => {
                                const commentId = comment._id;
                                handleUpdateComment(
                                  commentId,
                                  _id,
                                  token,
                                  newComment
                                );
                              }}
                              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Update Comment
                            </button>
                            <button
                              onClick={() =>
                                setEditCommentModal((flag) => !flag)
                              }
                              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        );
      })}
      {!editCommentModal && (
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddComment(_id, newComment, token);
          }}
        >
          <img
            src={user.avatarURL}
            className="h-10 w-10 rounded-full object-cover bg-indigo-800 mr-2"
            alt=""
          />
          <textarea
            required
            onChange={(e) =>
              setNewComment({ ...newComment, text: e.target.value })
            }
            value={newComment.text}
            className="h-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-800  text-white px-3 py-2 flex text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            comment
          </button>
        </form>
      )}
    </>
  );
};
export { PostComment };
