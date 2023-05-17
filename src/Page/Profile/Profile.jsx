import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUser, getIndividualUser } from "../../features/user/userSlice";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ProfileModal, Card } from "..";
import { getUserPost } from "../../features/posts/postSlice";
import { useTitle } from "../../utils/useTitle";

const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const [profileEditFlag, setProfileEditFlag] = useState(false);
  const { individualUser, follower } = useSelector((store) => store.user);
  const { user } = useSelector((store) => store.auth);

  const { posts } = useSelector((store) => store.post);
  const { bio, firstName, website, lastName, following } = individualUser;

  useTitle(`Profile`);

  useEffect(() => {
    dispatch(getIndividualUser(username));
    dispatch(getUserPost(username));
  }, [dispatch, username]);

  const editHandler = () => {
    setProfileEditFlag((flag) => !flag);
  };

  return (
    <>
      <div className="sm:col-span-2 ">
        <section className="flex flex-col items-center">
          <img
            src={individualUser?.avatarURL ?? "/assets/chris.jpg"}
            className="rounded-full  w-24 h-24 object-cover  my-5"
            alt="usersImage"
          />
          <span className="font-bold  text-lg">
            {firstName} {lastName}
          </span>
          <span className="text-lg">@{individualUser?.username}</span>
          {individualUser.username !== user.username ? (
            <button className="px-3 py-1 border-2 text-indigo-800 border-indigo-800 border-opacity-75">
              follow
            </button>
          ) : (
            <button
              onClick={editHandler}
              className="px-3 py-1 border-2 text-indigo-800 border-indigo-800 border-opacity-75"
            >
              Edit Button
            </button>
          )}

          <p className="text-center my-2">{bio}</p>
          <Link className="text-indigo-800" to="www.google.com">
            {website}
          </Link>
          <div className="bg-white flex justify-evenly p-5 w-1/2 my-2">
            <div className="flex flex-col  grow">
              <span className="font-bold">{following?.length}</span>
              <span className="font-bold  text-medium">Following</span>
            </div>
            <div className="flex flex-col grow">
              {posts?.find((post) => post.username === username) && (
                <>
                  <span className="font-bold">{posts?.length}</span>
                  <span className="font-bold  text-medium">Posts</span>
                </>
              )}
            </div>
            <div className="flex flex-col ">
              <span className="font-bold">{follower?.followers?.length}</span>
              <span className="font-bold  text-medium">Followers</span>
            </div>
          </div>
        </section>

        <section>
          {posts?.map((post) => {
            return (
              username === post?.username && (
                <>
                  <Card post={post} />
                </>
              )
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
