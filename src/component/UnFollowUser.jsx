import { useDispatch, useSelector } from "react-redux";
import {
  follow,
  getIndividualUser,
  unFollow,
} from "../features/user/userSlice";
const UnFollowUser = ({ eachUser }) => {
  const {
    avatarURL,
    firstName,
    lastName,
    _id,
    username,
    following,
    followers,
  } = eachUser;
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);
  const { allUser } = useSelector((store) => store.user);

  const handleFollow = (_id, token) => {
    console.log(username);
    dispatch(follow({ followUserId: _id, authToken: token }));
  };

  const handleUnFollow = (_id, token) => {
    dispatch(unFollow({ UnfollowId: _id, authToken: token }));
  };

  return (
    <div className=" p-5  border-t border-2 bg-white flex flex-col  my-1 gap-2 cursor-pointer ">
      <figure className="flex justify-center">
        <img
          src={avatarURL}
          className="rounded-full w-20 object-cover "
          alt="no image"
        />
        {followers.length}
      </figure>

      <div className=" px-5">
        <div className="cursor-pointer flex items-center justify-center text-sm gap-2">
          <span>{firstName}</span>
          <span>{lastName}</span>
        </div>

        <button
          className=" w-full cursor-pointer rounded-full border-2 border-solid text-red-500 px-3 py-2   border-red-500 my-3"
          onClick={() => handleUnFollow(_id, token)}
        >
          UnFollow
        </button>

        <button
          className="w-full text-center cursor-pointer  text-indigo-500 px-3 py-2  rounded-full border-2 border-solid border-indigo-500 my-3"
          onClick={() => handleFollow(_id, token)}
        >
          Follow
        </button>
      </div>
    </div>
  );
};
export { UnFollowUser };
