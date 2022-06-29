import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features/posts/postSlice";
import { toast } from "react-toastify";
const PostModal = ({ setModalPostFlag }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const [feed, setFeed] = useState({
    content: "",
  });

  const contentHandler = (event) => {
    setFeed((prev) => ({ ...prev, content: event }));
  };

  const handleSubmitPost = (postData, authToken) => {
    dispatch(createPost({ postData, authToken }));

    toast.success("Successfully created");

    setTimeout(() => {
      setModalPostFlag((flag) => !flag);
    }, 1000);
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
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start"></div>
              </div>
              <section className="bg-white  flex p-4">
                <img
                  src="./assets/social.jpg"
                  className="rounded-full w-10 h-10  "
                  alt=""
                />

                <div className="flex flex-col w-full ">
                  <input
                    required
                    onChange={(e) => contentHandler(e.target.value)}
                    value={feed.content}
                    placeholder="start your post..."
                    className=" h-20 bg-gray-100 px-2 "
                  />
                  <div className="flex justify-between ">
                    <div className="flex">
                      <button className="mr-1">
                        <i className="fa-solid fa-image"></i>
                      </button>
                      <button className="mr-1">
                        <i className="fa-solid fa-video"></i>
                      </button>
                      <button className="mr-1">
                        <i className="fa-solid fa-face-smile"></i>
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={() => setModalPostFlag((flag) => !flag)}
                        className="text-indigo-800 border-5  py-2 px-5 mt-2 mr-3"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSubmitPost(feed, token)}
                        className="bg-indigo-800 text-white  py-2 px-5 mt-2 "
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PostModal };
