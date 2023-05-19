import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <>
      <aside className="md:col-span-1 md:block hidden ">
        <ul className="flex flex-col bg-white rounded-md mr-2 px-8 sm:sticky sm:top-20">
          <li className="p-2 py-3 flex items-center justify-start text-lg  grow ">
            <NavLink to="/">
              <i className="fa-solid fa-house-user mr-3 "></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li className="p-2 py-3 flex items-center text-lg  justify-start">
            <NavLink to="/explore">
              <i className="fa-solid fa-rocket mr-3"></i>
              <span>Explore</span>
            </NavLink>
          </li>
          <li className="p-2 py-3 flex items-center text-lg  justify-start">
            <NavLink to="/saved">
              <i className="fa-solid fa-bookmark mr-3"></i>
              <span>Bookmark</span>
            </NavLink>
          </li>
          <li className="p-2 py-3 flex justify-start text-lg items-center">
            <NavLink to={`/profile/${user?.username}`}>
              <i className="fa-solid fa-user  mr-3"></i>
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};
export { SideBar };
