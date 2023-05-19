import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../features/auth/authSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const testGuest = ({ username, password }) => {
    setFormData({ ...formData, username: username, password: password });
  };

  const handleEvent = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSignIn = () => {
    dispatch(signInUser(formData));
    navigate("/");
  };

  return (
    <>
      <section className="grid grid-cols-12 ">
        <div className="col-start-5 col-end-8  my-3 bg-white p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handelSignIn();
            }}
          >
            <div>
              <span className="text-2xl text-indigo-800 font-bold">Login</span>
            </div>

            <div className="flex flex-col my-2">
              <label htmlFor="email" className="flex">
                UserName
              </label>
              <input
                autoComplete="on"
                onChange={(e) => handleEvent(e)}
                type="text"
                name="username"
                required
                value={username}
                placeholder="eg.adam@gmail.com"
                className=" border-indigo-800 border-2 p-2 rounded-md border-opacity-50"
              />
            </div>
            <div className="flex flex-col my-2  ">
              <label htmlFor="password" className="flex">
                Password
              </label>
              <input
                autoComplete="on"
                onChange={(e) => handleEvent(e)}
                type="password"
                required
                name="password"
                value={password}
                placeholder="eg.adgj180019"
                className=" border-indigo-800 border-2 p-2 rounded-md border-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="w-full p-1 flex justify-center rounded-md bg-indigo-800 text-white text-lg items-center my-5"
            >
              Login
            </button>
          </form>
          <div>
            <button
              onClick={() =>
                testGuest({ username: "i_am_onkar", password: "omkar123" })
              }
              className="w-full p-1 flex justify-center rounded-md border-gray-300  border-2 text-gray-400 text-lg items-center my-5"
            >
              Login as Guest
            </button>
            <Link to="/">Don't Have Account ?</Link>
          </div>
        </div>
      </section>
    </>
  );
};
export { Signin };
