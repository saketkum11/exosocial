import { Link, useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../features/auth/authSlice";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { Navigation } from "./Navigation";

const Header = () => {
  const { token } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const [navFlag, setNavFlag] = useState(false);
  return (
    <>
      <nav className="bg-white sticky z-10 top-0">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className=" inset-y-0 left-0 flex items-center sm:hidden">
              {navFlag ? (
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setNavFlag((flag) => !flag)}
                >
                  <i class="fa-sharp fa-solid fa-xmark"></i>
                </button>
              ) : (
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setNavFlag((flag) => !flag)}
                >
                  <i class="fa-solid fa-bars"></i>
                </button>
              )}
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <NavLink to="/">
                  <span className="text-indigo-800 text-2xl font-bold">
                    ExoSocial
                  </span>
                </NavLink>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="ml-3 relative">
                {token ? (
                  <button
                    onClick={onLogout}
                    className="bg-indigo-800  text-white px-3 py-2 flex text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="bg-indigo-800  text-white px-3 py-2 flex text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {navFlag && (
        <>
          <Navigation />
        </>
      )}
    </>
  );
};
export { Header };
