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
  const { token } = useSelector((store) => store.auth);

  const handleFollow = (_id, token) => {
    dispatch(follow({ followUserId: _id, authToken: token }));
  };
  const handleUnFollow = (_id, token) => {
    dispatch(unFollow({ UnfollowId: _id, authToken: token }));
  };
  const filterUser = allUser.filter(
    (user) => user.username !== individualUser.username
  );
  const handleFollowerUser = (username, token) => {
    dispatch(getIndividualUser(username, token));
  };
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
                    className="rounded-full w-8 h-8 mr-3 object-cover "
                    alt=""
                  />
                  <div
                    onClick={() => {
                      handleFollowerUser(username, token);
                    }}
                    className="flex flex-col "
                  >
                    <span>
                      {firstName} {lastName}
                    </span>
                    <small>@{username}</small>
                  </div>
                </div>
                {individualUser.following.find(
                  (followingUser) => followingUser.username === username
                ) ? (
                  <button
                    onClick={() => {
                      handleUnFollow(_id, token);
                    }}
                    className="bg-red-600 text-white px-2 py-1 rounded-md"
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleFollow(_id, token);
                    }}
                    className="bg-indigo-800 text-white px-2 py-1 rounded-md"
                  >
                    Follow
                  </button>
                )}
              </li>
            </ul>
          );
        })}
      </section>
    </>
  );
};
export { Follow };
