import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { UnFollowUser } from "./UnFollowUser";
const Follow = () => {
  const { username } = useParams();

  const { allUser, individualUser, follower } = useSelector(
    (store) => store.user
  );
  const { token, user } = useSelector((store) => store.auth);

  const unFollowedUser = [...allUser].filter(
    (eachUser) => eachUser.username !== user.username
  );

  return (
    <>
      <section className="sm:col-span-1 lg:block hidden ">
        <div className="sm:sticky sm:top-20">
          <div className="flex justify-around border-b-2 mt-3 p-2">
            <span>Whom to Follow?</span>
          </div>
          <div className="">
            {[...unFollowedUser]?.map((userFollow) => (
              <UnFollowUser eachUser={userFollow} key={userFollow._id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export { Follow };
