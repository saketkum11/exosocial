import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserProfile } from "../features/user/userSlice";
import { toast } from "react-toastify";
const ProfileModal = ({ setProfileEditFlag }) => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.auth);
  const { firstName, lastName, username, bio, website } = user;
  const [updateProfile, setUpdateProfile] = useState({
    firstName: firstName,
    lastName: lastName,
    username: username,
    bio: bio,
    website: website,
  });

  const submitProfileForm = (userData, authToken) => {
    dispatch(editUserProfile({ userData, authToken }));
    toast.success("Successfully updated");
    setProfileEditFlag((flag) => !flag);
  };
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black opacity-40 z-10"></div>
      <div className="fixed top-1/4  flex w-full justify-center   z-20  ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitProfileForm(updateProfile, token);
          }}
          className="bg-white  p-9"
        >
          <div className=" ">
            <div className="my-2 flex flex-col items-start">
              <label
                htmlFor="firstname"
                className=" text-sm font-medium text-gray-700 my-2 ml-2"
              >
                FirstName
              </label>
              <input
                onChange={(e) =>
                  setUpdateProfile({
                    ...updateProfile,
                    firstName: e.target.value,
                  })
                }
                id="firstname"
                required
                name="firstName"
                type="text"
                value={updateProfile.firstName}
                disabled
                className="bg-gray-100 border-md focus:ring-indigo-500 focus:border-indigo-500  w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md  py-2"
              />
            </div>
            <div className=" flex flex-col items-start my-2">
              <label
                htmlFor="lastname"
                className=" text-sm font-medium text-gray-700 my-2 ml-2"
              >
                LastName
              </label>
              <input
                onChange={(e) =>
                  setUpdateProfile({
                    ...updateProfile,
                    lastName: e.target.value,
                  })
                }
                id="lastname"
                value={updateProfile.lastName}
                required
                name="lastName"
                type="text"
                disabled
                className="bg-gray-100 border-md focus:ring-indigo-500 focus:border-indigo-500  w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md  py-2"
              />
            </div>
            <div className=" flex flex-col items-start my-2">
              <label
                htmlFor="username"
                className=" text-sm font-medium text-gray-700 my-2 ml-2"
              >
                UserName
              </label>
              <input
                onChange={(e) =>
                  setUpdateProfile({
                    ...updateProfile,
                    username: e.target.value,
                  })
                }
                id="username"
                required
                value={updateProfile.username}
                name="username"
                type="text"
                disabled
                className="bg-gray-100 border-md focus:ring-indigo-500 focus:border-indigo-500  w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md  py-2"
              />
            </div>
            <div className="  flex flex-col items-start my-2">
              <label
                htmlFor="bio"
                className=" text-sm font-medium text-gray-700 my-2 ml-2"
              >
                Bio
              </label>
              <input
                onChange={(e) =>
                  setUpdateProfile({
                    ...updateProfile,
                    bio: e.target.value,
                  })
                }
                id="bio"
                value={updateProfile.bio}
                required
                name="bio"
                type="text"
                className="bg-gray-100 border-md focus:ring-indigo-500 focus:border-indigo-500  w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md  py-2"
              />
            </div>
            <div className="  flex flex-col items-start my-2">
              <label
                htmlFor="website"
                className=" text-sm font-medium text-gray-700 my-2 ml-2"
              >
                Website
              </label>
              <input
                onChange={(e) =>
                  setUpdateProfile({
                    ...updateProfile,
                    website: e.target.value,
                  })
                }
                id="website"
                value={updateProfile.website}
                required
                name="website"
                type="text"
                className="bg-gray-100 border-md focus:ring-indigo-500 focus:border-indigo-500  w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
              />
            </div>

            <div className="flex justify-between">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setProfileEditFlag((flag) => !flag);
                }}
                className="text-indigo-800 border-5  py-2 px-5 mt-2 mr-3"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-800 text-white  py-2 px-5 mt-2 "
              >
                save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export { ProfileModal };
