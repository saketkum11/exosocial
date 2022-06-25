import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInUser, signUpUser } from "../../features/auth/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userCredential, setUserCredential] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = userCredential;

  const handleEvent = (e) => {
    setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    dispatch(signUpUser(userCredential));
    dispatch(signInUser({ email, password }));
    navigate("/home");
  };

  return (
    <>
      <div className="p-4 bg-white ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <div>
            <span className="text-2xl text-indigo-800 font-bold">SignUp</span>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="firstName" className="flex">
              FirstName
            </label>
            <input
              onChange={(e) => handleEvent(e)}
              type="text"
              name="firstName"
              required
              value={firstName}
              placeholder="eg.Adam Josh"
              className=" border-indigo-800 border-2 p-2 rounded-md border-opacity-50"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="lastName" className="flex">
              LastName
            </label>
            <input
              onChange={(e) => handleEvent(e)}
              type="text"
              name="lastName"
              required
              value={lastName}
              placeholder="eg.Adam Josh"
              className=" border-indigo-800 border-2  p-2 rounded-md border-opacity-50"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="email" className="flex">
              Email
            </label>
            <input
              onChange={(e) => handleEvent(e)}
              type="email"
              name="email"
              required
              value={email}
              placeholder="eg.adam@gmail.com"
              className=" border-indigo-800 border-2 p-2 rounded-md border-opacity-50"
            />
          </div>
          <div className="flex flex-col my-2  ">
            <label htmlFor="password" className="flex">
              Password
            </label>
            <input
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
            className="w-full p-1 flex justify-center bg-indigo-800 text-white text-lg items-center my-5"
          >
            Create Account
          </button>
        </form>
        <div>
          <Link to="/login">Already Have account ?</Link>
        </div>
      </div>
    </>
  );
};
export { Signup };
