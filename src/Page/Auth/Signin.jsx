import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <section className="grid grid-cols-12 ">
        <div className="col-start-5 col-end-8  my-3 bg-white p-4">
          <form action="" className="">
            <div>
              <span className="text-2xl text-indigo-800 font-bold">SignUp</span>
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
              Signin
            </button>
          </form>
          <div>
            <Link to="/signup">Don't Have Account ?</Link>
          </div>
        </div>
      </section>
    </>
  );
};
export { Signin };
