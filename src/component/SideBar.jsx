const SideBar = () => {
  return (
    <>
      <aside className="col-start-2 col-end-4">
        <ul className="flex flex-col">
          <li className="p-2 py-3 flex items-center justify-start text-lg  grow ">
            <i className="fa-solid fa-house-user mr-3 "></i>
            <span>Home</span>
          </li>
          <li className="p-2 py-3 flex items-center text-lg  justify-start">
            <i className="fa-solid fa-rocket mr-3"></i>
            <span>Explore</span>
          </li>
          <li className="p-2 py-3 flex items-center text-lg  justify-start">
            <i className="fa-solid fa-bookmark mr-3"></i>
            <span>Bookmark</span>
          </li>
          <li className="p-2 py-3 flex justify-start text-lg items-center">
            <i className="fa-solid fa-user  mr-3"></i>
            <span>Profile</span>
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
