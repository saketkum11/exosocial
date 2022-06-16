const Post = () => {
  return (
    <>
      <section className="bg-white  flex p-4">
        <img
          src="./assets/social.jpg"
          className="rounded-full w-10 h-10 mr-2 "
          alt=""
        />

        <div className="flex flex-col w-full">
          <input
            placeholder="start your post..."
            className=" h-20 bg-gray-100 px-2 "
          ></input>
          <div className="flex justify-between ">
            <div className="flex">
              <button className="mr-1">
                <i class="fa-solid fa-image"></i>
              </button>
              <button className="mr-1">
                <i class="fa-solid fa-video"></i>
              </button>
              <button className="mr-1">
                <i class="fa-solid fa-face-smile"></i>
              </button>
            </div>
            <button className="bg-indigo-800 text-white  py-2 px-5 mt-2 ">
              Post
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export { Post };
