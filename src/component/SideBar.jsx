import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { user } = useSelector((store) => store.auth);
  console.log("user", user);

  return (
    <>
      <aside className="md:col-span-1 md:block hidden">
        <ul className="flex flex-col bg-white rounded-md mr-2 px-8">
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
            <Link to={`/profile/${user?.username}`}>
              <i className="fa-solid fa-user  mr-3"></i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};
export { SideBar };
