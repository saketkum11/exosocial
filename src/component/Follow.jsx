const Follow = () => {
  return (
    <>
      <section className="flex flex-col rounded-md bg-white w-1/5">
        <div className="flex justify-around border-b-2 mt-3 p-2">
          <span>Who to Follow?</span>
          <button>Show More</button>
        </div>

        <ul className="flex w-full  flex-col flex-wrap p-5 ">
          <li className="flex   items-center my-1 ">
            <div className="flex grow items-center">
              <img
                src="./assets/social.jpg"
                className="rounded-full w-8 h-8 mr-3 "
                alt=""
              />
              <div className="flex flex-col ">
                <span>Adam Josh</span>
                <small>@adamJosh</small>
              </div>
            </div>

            <button className="">Follow</button>
          </li>
          <li className="flex   items-center ">
            <div className="flex grow items-center">
              <img
                src="./assets/social.jpg"
                className="rounded-full w-8 h-8 mr-3 "
                alt=""
              />
              <div className="flex flex-col ">
                <span>Adam Josh</span>
                <small>@adamJosh</small>
              </div>
            </div>

            <button className="">Follow</button>
          </li>
        </ul>
      </section>
    </>
  );
};
export { Follow };
