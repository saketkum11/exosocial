import { Signup } from "../Auth/Signup";

const Landing = () => {
  return (
    <>
      <main className="grid grid-cols-12 grid-rows-6 container ">
        <section className="col-start-3 col-end-6 row-start-3 row-end-6 content-start">
          <span className="text-3xl font-bold text-indigo-800">ExoSocial</span>
          <div className="flex flex-col  mt-3">
            <span className=" text-indigo-800">
              FOLLOW<small>PEOPLE AROUND THE GLOBE</small>
            </span>
            <span className="text-indigo-800">
              CONNECT<small>WITH YOUR FRIEND</small>
            </span>
            <span className="text-indigo-800">
              SHARE <small>WHAT YOU THINK</small>
            </span>
          </div>
        </section>
        <section className="col-start-8 col-end-11 row-start-1 row-end-7 my-5  bg-gray-200">
          <Signup />
        </section>
      </main>
    </>
  );
};
export { Landing };
