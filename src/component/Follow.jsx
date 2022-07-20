import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  follow,
  getIndividualUser,
  unFollow,
} from "../features/user/userSlice";

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
  const filterUser = allUser?.filter(
    (userData) => userData.username !== individualUser.username
  );
  const handleFollowerUser = (username, token) => {
    dispatch(getIndividualUser(username, token));
  };

  const followData = allUser?.find(
    (singleuser) => singleuser.username !== user.username
  );

  return (
    <>
      <section className=" justify-start col-start-10 col-end-12 ">
        <div className="flex justify-around border-b-2 mt-3 p-2">
          <span>Who to Follow?</span>
          <button>Show More</button>
        </div>

        {filterUser?.map((user) => {
          const { firstName, lastName, avatarURL, username, _id } = user;
          return (
            <ul
              key={user?._id}
              className="flex w-full  flex-col flex-wrap p-5  border-t border-2 bg-white"
            >
              <li className="flex  items-center justify-evenly my-1 ">
                <div className="flex grow items-center">
                  <img
                    src={avatarURL}
                    className="rounded-full w-8 h-8 mr-3 object-cover cursor-pointer "
                    alt=""
                  />
                  <div className="flex flex-col  ">
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        handleFollowerUser(username, token);
                      }}
                    >
                      {firstName} {lastName}
                    </span>
                    <small>@{username}</small>
                    {followData ? (
                      <button
                        className="cursor-pointer bg-red-600  text-white px-3 py-2 flex text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        onClick={() => handleUnFollow(_id, token)}
                      >
                        UnFollow
                      </button>
                    ) : (
                      <button
                        className="cursor-pointer bg-indigo-800  text-white px-3 py-2 flex text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        onClick={() => handleFollow(_id, token)}
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
      </section>
    </>
  );
};
export { Follow };
