import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  follow,
  getIndividualUser,
  unFollow,
} from "../features/user/userSlice";
import { useParams, Link } from "react-router-dom";
const Follow = () => {
  const dispatch = useDispatch();
  const { allUser, individualUser } = useSelector((store) => store.user);
  const { token, user } = useSelector((store) => store.auth);
  const handleFollow = (_id, token) => {
    dispatch(follow({ followUserId: _id, authToken: token }));
  };
  const handleUnFollow = (_id, token) => {
    dispatch(unFollow({ UnfollowId: _id, authToken: token }));
  };

  const handleFollowerUser = (username, token) => {
    dispatch(getIndividualUser(username, token));
  };

  return (
    <>
      <section className="md:col-span-1 lg:block hidden">
        <div className="flex justify-around border-b-2 mt-3 p-2">
          <span>Who to Follow?</span>
          <button>Show More</button>
        </div>
        <div className="">
          {[...allUser]?.map((userFollow) => {
            const { firstName, lastName, avatarURL, username, _id } =
              userFollow;
            return (
              individualUser?.username !== username && (
                <div
                  key={userFollow?._id}
                  className=" p-5  border-t border-2 bg-white flex flex-col  my-1 gap-2 cursor-pointer "
                >
                  <figure className="flex justify-center">
                    <img
                      src={avatarURL}
                      className="rounded-full w-20 object-cover "
                      alt="no image"
                    />
                  </figure>

                  <div className=" px-5">
                    <div>
                      <Link
                        className="cursor-pointer flex items-center justify-center text-sm gap-2"
                        to={`/profile/${username ?? "saket601"}`}
                        onClick={() => {
                          handleFollowerUser(username, token);
                        }}
                      >
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                      </Link>
                    </div>

                    <div className="">
                      {individualUser.following?.find(
                        (userFollowed) => userFollowed.username === username
                      ) ? (
                        <button
                          className=" w-full cursor-pointer rounded-full border-2 border-solid text-red-500 px-3 py-2   border-red-500 my-3"
                          onClick={() => handleUnFollow(_id, token)}
                        >
                          UnFollow
                        </button>
                      ) : (
                        <button
                          className="w-full text-center cursor-pointer  text-indigo-500 px-3 py-2  rounded-full border-2 border-solid border-indigo-500 my-3"
                          onClick={() => handleFollow(_id, token)}
                        >
                          Follow
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </section>
    </>
  );
};
export { Follow };
