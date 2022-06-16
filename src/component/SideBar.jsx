import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <aside className="col-start-2 col-end-4">
        <ul className="flex flex-col">
          <li className="p-2 py-3 flex items-center justify-start text-lg  grow ">
            <Link to="/home">
              <i className="fa-solid fa-house-user mr-3 "></i>
              <span>Home</span>
            </Link>
          </li>
          <li className="p-2 py-3 flex items-center text-lg  justify-start">
            <Link to="/explore">
              <i className="fa-solid fa-rocket mr-3"></i>
              <span>Explore</span>
            </Link>
          </li>
          <li className="p-2 py-3 flex items-center text-lg  justify-start">
            <Link to="/saved">
              <i className="fa-solid fa-bookmark mr-3"></i>
              <span>Bookmark</span>
            </Link>
          </li>
          <li className="p-2 py-3 flex justify-start text-lg items-center">
            <Link to="/profile">
              <i className="fa-solid fa-user  mr-3"></i>
              <span>Profile</span>
            </Link>
          </li>
          <li className="p-2 flex justify-center bg-indigo-800 text-white text-lg items-center">
            <button>Create New Post</button>
          </li>
        </ul>
      </aside>
    </>
  );
};
export { SideBar };
