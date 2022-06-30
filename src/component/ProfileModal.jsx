import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserProfile } from "../features/user/userSlice";
import { toast } from "react-toastify";
const ProfileModal = ({ setProfileEditFlag }) => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.auth);
  const { firstName, lastName, username, bio, website } = user;
  const [updateProfile, setUpdateProfile] = useState({
    firstName,
    lastName,
    username,
    bio,
    website,
  });

  const submitProfileForm = (userData, authToken) => {
    dispatch(editUserProfile({ userData, authToken }));
    toast.success("Successfully updated");
    setProfileEditFlag((flag) => !flag);
  };
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitProfileForm(updateProfile, token);
                }}
                className="bg-white  flex p-4"
              >
                <div className="flex flex-col w-full ">
                  <div className="flex flex-col justify-between ">
                    <div>
                      <label htmlFor="firstname">FirstName</label>
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
                        className="bg-gray-100 border-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastname">last Name</label>
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
                      />
                    </div>
                    <div>
                      <label htmlFor="username">UserName</label>
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
                      />
                    </div>
                    <div>
                      <label htmlFor="bio">Bio</label>
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
                      />
                    </div>
                    <div>
                      <label htmlFor="website">Website</label>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProfileModal };
