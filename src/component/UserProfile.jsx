import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllUser, getIndividualUser } from "../features/user/userSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  console.log("username", username);
  const { token } = useSelector((store) => store.auth);
  useEffect(() => {
    dispatch(getIndividualUser(username));
  }, []);
  return (
    <>
      <div className="col-start-4 col-end-10 ">
        <section className="flex flex-col items-center">
          <img
            src="./assets/social.jpg"
            className="rounded-full  w-24 h-24 object-cover  my-5"
            alt="usersImage"
          />
          <span className="font-bold  text-lg">username</span>
          <span className="text-lg">@adamJosh</span>
          <button className="px-3 py-1 border-2 text-indigo-800 border-indigo-800 border-opacity-75">
            Edit Button
          </button>
          <p className="text-center my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            voluptatibus earum sunt impedit. Eius accusamus, vel ab ipsam
            asperiores repudiandae.
          </p>
          <Link className="text-indigo-800" to="www.google.com my-1">
            Google.com
          </Link>
          <div className="bg-white flex justify-evenly p-5 w-1/2 my-2">
            <div className="flex flex-col  grow">
              <span className="font-bold">200</span>
              <span className="font-bold  text-medium">Following</span>
            </div>
            <div className="flex flex-col grow">
              <span className="font-bold">500</span>
              <span className="font-bold  text-medium">Posts</span>
            </div>
            <div className="flex flex-col ">
              <span className="font-bold">500K</span>
              <span className="font-bold  text-medium">Followers</span>
            </div>
          </div>
        </section>

        <ToastContainer />
      </div>
    </>
  );
};
export { UserProfile };
