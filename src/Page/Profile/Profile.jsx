import { UserProfile } from "../../component/UserProfile";
import { useSelector } from "react-redux";
const Profile = () => {
  const { posts } = useSelector((store) => store.post);
  console.log("from post slice", posts);
  return (
    <>
      <UserProfile />
    </>
  );
};
export { Profile };
