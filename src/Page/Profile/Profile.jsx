import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getIndividualUser } from "../../features/user/userSlice";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ProfileModal, Card } from "..";
import { getUserPost } from "../../features/posts/postSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const [profileEditFlag, setProfileEditFlag] = useState(false);
  const { individualUser } = useSelector((store) => store.user);
  const { posts, userPost } = useSelector((store) => store.post);

  const { avatarURL, bio, firstName, website, lastName, followers, following } =
    individualUser;

  useEffect(() => {
    dispatch(getIndividualUser(username));
    dispatch(getUserPost(username));
  }, []);

  const editHandler = () => {
    setProfileEditFlag((flag) => !flag);
  };
  return (
    <>
      <div className="col-start-4 col-end-10 ">
        <section className="flex flex-col items-center">
          <img
            src={avatarURL}
            className="rounded-full  w-24 h-24 object-cover  my-5"
            alt="usersImage"
          />
          <span className="font-bold  text-lg">
            {firstName} {lastName}
          </span>
          <span className="text-lg">@{individualUser.username}</span>
          <button
            onClick={editHandler}
            className="px-3 py-1 border-2 text-indigo-800 border-indigo-800 border-opacity-75"
          >
            Edit Button
          </button>
          <p className="text-center my-2">{bio}</p>
          <Link className="text-indigo-800" to="www.google.com">
            {website}
          </Link>
          <div className="bg-white flex justify-evenly p-5 w-1/2 my-2">
            <div className="flex flex-col  grow">
              <span className="font-bold">{following}</span>
              <span className="font-bold  text-medium">Following</span>
            </div>
            <div className="flex flex-col grow">
              <span className="font-bold">{followers}</span>
              <span className="font-bold  text-medium">Posts</span>
            </div>
            <div className="flex flex-col ">
              <span className="font-bold">{following}</span>
              <span className="font-bold  text-medium">Followers</span>
            </div>
          </div>
        </section>
        <section>
          {posts?.map((post) => {
            return (
              <>
                <Card post={post} />
              </>
            );
          })}
        </section>
      </div>
      {profileEditFlag && (
        <ProfileModal setProfileEditFlag={setProfileEditFlag} />
      )}
    </>
  );
};

export { Profile };
