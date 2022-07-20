import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePost } from "./UpdatePost";
import { toast } from "react-toastify";
import { deletePost } from "../features/posts/postSlice";
const EditPost = ({ setEditFlag, post }) => {
  const [updatePostFlag, setUpdatePostFlag] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);

  const handleDeletePost = (_id, authToken) => {
    dispatch(deletePost({ postId: _id, authToken }));
    toast.error("deleted post");
  };
  return (
    <>
      <ul
        class="origin-top-right absolute right-12 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabindex="-1"
      >
        <li
          onClick={() => setUpdatePostFlag((flag) => !flag)}
          class="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabindex="-1"
        >
          edit post
        </li>
        <li
          onClick={() => handleDeletePost(post._id, token)}
          class="block px-4 border-2 py-2 text-sm text-gray-700"
          role="menuitem"
          tabindex="-1"
        >
          delete
        </li>
      </ul>
      {updatePostFlag && (
        <UpdatePost
          post={post}
          setUpdatePostFlag={setUpdatePostFlag}
          setEditFlag={setEditFlag}
        />
      )}
    </>
  );
};

export { EditPost };
