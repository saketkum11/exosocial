import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../features/posts/postSlice";
import { toast } from "react-toastify";

const UpdatePost = ({ setUpdatePostFlag, post, setEditFlag }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.post);
  const { token, user } = useSelector((store) => store.auth);

  const { _id, avatarURL, username, firstName, lastName } = post;

  const [updateFeed, setUpdateFeed] = useState({
    content: "",
  });

  const handleUpdatePost = (postData, id, authToken) => {
    dispatch(editPost({ postData, postId: id, authToken }));
    setEditFlag(false);
    toast.success("Successfully updated post");
  };

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg ">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleUpdatePost(updateFeed, _id, token);
                    }}
                    className="bg-white  flex p-4"
                  >
                    <img
                      src={user.avatarURL}
                      className="rounded-full w-10 h-10  "
                      alt=""
                    />

                    <div className="flex flex-col w-full ">
                      <textarea
                        required
                        onChange={(e) =>
                          setUpdateFeed({
                            ...updateFeed,
                            content: e.target.value,
                          })
                        }
                        value={updateFeed.content}
                        placeholder="start your post..."
                        className=" h-20 bg-gray-100 px-2 "
                      />
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-indigo-800 shadow-sm px-4 py-2 bg-indigo-800 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Post
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setUpdatePostFlag((flag) => !flag);
                          }}
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { UpdatePost };
