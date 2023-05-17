import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  follow,
  getIndividualUser,
  unFollow,
} from "../features/user/userSlice";
import { useParams, Link } from "react-router-dom";
import { useTitle } from "../utils/useTitle";
const Follow = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { allUser, individualUser, follower } = useSelector(
    (store) => store.user
  );
  const { token, user } = useSelector((store) => store.auth);
  useTitle(`profile | ${username}`);

  const handleFollow = (_id, token) => {
    dispatch(follow({ followUserId: _id, authToken: token }));
  };

  const handleUnFollow = (_id, token) => {
    dispatch(unFollow({ UnfollowId: _id, authToken: token }));
  };

  const handleFollowerUser = (username, token) => {
    dispatch(getIndividualUser(username, token));
  };

  const restFollow = [...allUser]?.filter(
    (followUser) => followUser?.username !== user?.username
  );

  console.log(username, user, "follower", follower);
  return (
    <>
      <section className="sm:col-span-1 lg:block hidden ">
        <div className="sm:sticky sm:top-20">
          <div className="flex justify-around border-b-2 mt-3 p-2">
            <span>Who to Follow?</span>
          </div>
          <div className="">
            {[...restFollow]?.map((userFollow) => {
              const { firstName, lastName, avatarURL, username, _id } =
                userFollow;
              return (
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
                      <div
                        className="cursor-pointer flex items-center justify-center text-sm gap-2"
                        to={`/profile/${username ?? "saket601"}`}
                      >
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                      </div>
                    </div>

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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export { Follow };
