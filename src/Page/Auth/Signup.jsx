import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="p-4 bg-white ">
        <form>
          <div>
            <span className="text-2xl text-indigo-800 font-bold">SignUp</span>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="firstName" className="flex">
              FirstName
            </label>
            <input
              type="text"
              placeholder="eg.Adam Josh"
              className=" border-indigo-800 border-2 p-2 rounded-md border-opacity-50"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="lastName" className="flex">
              LastName
            </label>
            <input
              type="text"
              placeholder="eg.Adam Josh"
              className=" border-indigo-800 border-2  p-2 rounded-md border-opacity-50"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="email" className="flex">
              Email
            </label>
            <input
              type="email"
              placeholder="eg.adam@gmail.com"
              className=" border-indigo-800 border-2 p-2 rounded-md border-opacity-50"
            />
          </div>
          <div className="flex flex-col my-2  ">
            <label htmlFor="password" className="flex">
              Password
            </label>
            <input
              type="password"
              placeholder="eg.adgj180019"
              className=" border-indigo-800 border-2 p-2 rounded-md border-opacity-50"
            />
          </div>
          <button className="w-full p-1 flex justify-center bg-indigo-800 text-white text-lg items-center my-5">
            Create Account
          </button>
        </form>
        <div>
          <Link to="/">Already Have account ?</Link>
        </div>
      </div>
    </>
  );
};
export { Signup };
