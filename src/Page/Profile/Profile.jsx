import { UserProfile } from "../../component/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUser } from "../../features/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { allUser } = useSelector((store) => store.user);
  console.log("user from ", allUser);
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  return (
    <>
      <UserProfile />
    </>
  );
};

export { Profile };
