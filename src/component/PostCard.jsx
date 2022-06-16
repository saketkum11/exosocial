const PostCard = () => {
  return (
    <>
      <div className="col-start-4 col-end-10">
        <section className="flex flex-col flex-wrap">
          <div className="flex text-lg justify-between px-3 my-3">
            <span>Latest Post</span>
            <button>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
          <div className="bg-white flex p-3  my-3">
            <img
              src="./assets/social.jpg"
              className="rounded-full  w-16 h-10 mr-2 "
              alt=""
            />
            <div className="flex flex-col ">
              <div className="flex justify-between py-2">
                <div className="flex">
                  <span>Adam Josh</span>
                  <span>@adamJosh</span>
                  <span>1min ago</span>
                </div>
                <button>
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>

              <p className="text-left py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quos officia eligendi in architecto, consequuntur tempora
                aspernatur veniam repellat nemo harum eius fugit optio, rerum
                error sed beatae molestias at consectetur velit modi. Dolor,
                molestias non corporis eius quos dolorem repellendus. Quisquam
                in error vitae exercitationem omnis voluptatibus unde
                consequuntur.
              </p>

              <div className="flex justify-between py-2">
                <button>
                  <i class="fa-solid fa-heart"></i>
                </button>
                <button>
                  <i class="fa-solid fa-message"></i>
                </button>
                <button>
                  <i class="fa-solid fa-share-nodes"></i>
                </button>
                <button>
                  <i class="fa-solid fa-bookmark"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white flex p-3">
            <img
              src="./assets/social.jpg"
              className="rounded-full  w-16 h-10 mr-2 "
              alt=""
            />
            <div className="flex flex-col ">
              <div className="flex justify-between py-2">
                <div className="flex">
                  <span>Adam Josh</span>
                  <span>@adamJosh</span>
                  <span>1min ago</span>
                </div>
                <button>
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>

              <p className="text-left py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quos officia eligendi in architecto, consequuntur tempora
                aspernatur veniam repellat nemo harum eius fugit optio, rerum
                error sed beatae molestias at consectetur velit modi. Dolor,
                molestias non corporis eius quos dolorem repellendus. Quisquam
                in error vitae exercitationem omnis voluptatibus unde
                consequuntur.
              </p>

              <div className="flex justify-between py-2">
                <button>
                  <i class="fa-solid fa-heart"></i>
                </button>
                <button>
                  <i class="fa-solid fa-message"></i>
                </button>
                <button>
                  <i class="fa-solid fa-share-nodes"></i>
                </button>
                <button>
                  <i class="fa-solid fa-bookmark"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white flex p-3">
            <img
              src="./assets/social.jpg"
              className="rounded-full  w-16 h-10 mr-2 "
              alt=""
            />
            <div className="flex flex-col ">
              <div className="flex justify-between py-2">
                <div className="flex">
                  <span>Adam Josh</span>
                  <span>@adamJosh</span>
                  <span>1min ago</span>
                </div>
                <button>
                  <i class="fa-solid fa-ellipsis"></i>
                </button>
              </div>

              <p className="text-left py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                quos officia eligendi in architecto, consequuntur tempora
                aspernatur veniam repellat nemo harum eius fugit optio, rerum
                error sed beatae molestias at consectetur velit modi. Dolor,
                molestias non corporis eius quos dolorem repellendus. Quisquam
                in error vitae exercitationem omnis voluptatibus unde
                consequuntur.
              </p>

              <div className="flex justify-between py-2">
                <button>
                  <i class="fa-solid fa-heart"></i>
                </button>
                <button>
                  <i class="fa-solid fa-message"></i>
                </button>
                <button>
                  <i class="fa-solid fa-share-nodes"></i>
                </button>
                <button>
                  <i class="fa-solid fa-bookmark"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export { PostCard };
