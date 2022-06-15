const SideBar = () => {
  return (
    <>
      <aside className="w-1/5  bg-white rounded-md">
        <div className="">
          <ul className="flex flex-col  ">
            <li className="p-2 flex items-center justify-start text-lg  grow ">
              <i className="fa-solid fa-house-user mr-3 "></i>
              <span>Home</span>
            </li>
            <li className="p-2 flex items-center text-lg  justify-start">
              <i className="fa-solid fa-rocket mr-3"></i>
              <span>Explore</span>
            </li>
            <li className="p-2 flex items-center text-lg  justify-start">
              <i className="fa-solid fa-bookmark mr-3"></i>
              <span>Bookmark</span>
            </li>
            <li className="p-2 flex justify-start text-lg items-center">
              <i className="fa-solid fa-user  mr-3"></i>
              <span>Profile</span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export { SideBar };
