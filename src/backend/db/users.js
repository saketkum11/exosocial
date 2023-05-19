import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // user 1
  {
    _id: uuid(),
    firstName: "Saket",
    lastName: "kumar",
    username: "saketkum11",
    password: "saket123",
    following: [],
    followers: [
      {
        _id: uuid(),
        firstName: "Omkar",
        lastName: " Deshpande",
        username: "i_am_onkar",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1480028730965643273/jQVdkKTC_200x200.jpg",
      },
    ],
    avatarURL:
      "https://pbs.twimg.com/profile_images/1651849331639451648/7T3kgKty_200x200.jpg",
    bio: "Believe It.I am not what I think I am , I am not What  you think I am , I am What I think you think I am. by Prof. Cooley",
    website: "saketkum.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // user 2

  {
    _id: uuid(),
    firstName: "Omkar",
    lastName: "Deshpande",
    username: "i_am_onkar",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1480028730965643273/jQVdkKTC_200x200.jpg",
    password: "omkar123",
    email: "omkar@gmail.com",
    following: [],
    followers: [],
    bio: "Learning web development @neogcamp'22 | Tweets about accessibility and my web dev journey.",
    website: "taran.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // user 3

  {
    _id: uuid(),
    firstName: "Manisha",
    lastName: "Pandey",
    username: "ManishaG15",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1467052770666573827/8tDPTKRG_200x200.jpg",
    password: "manisha123",
    email: "madhusree@gmail.com",
    following: [],
    followers: [],

    bio: "I learn,Build,and share it with you people, ",
    website: "madhuseer.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // user 4
  {
    _id: uuid(),
    firstName: "Ritik",
    lastName: "Kapoor",
    username: "rkap810",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1629579647615926272/ScgBZefN_200x200.jpg",
    bio: "Learning and growing with @neogcamp| Documenting my coding journey | Interested in startups",
    email: "pavan@gmail.com",
    website: "pavan.netlify.com",
    following: [],
    followers: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // user 5
  {
    _id: uuid(),
    firstName: "Vaibhav",
    lastName: "Matere 🇮🇳👨‍💻",
    username: "vaibhav_matere",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1563416219125878784/HitG_KUE_200x200.jpg",
    bio: "Front-end @sosimplified | @neogcamp 2022 | Photographer, designer",
    website: "ritik.netlify.com",
    following: [],
    followers: [],

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // user 6
  {
    _id: uuid(),
    firstName: "Library",
    lastName: "Mindset",
    username: "librarymindset",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1455901591198781454/HBWPME8c_200x200.jpg",
    email: "atul@gmail.com",
    bio: "Front-end @sosimplified | @neogcamp 2022 | Photographer, designer",
    website: "bio.link/saurabhchirde",
    following: [],
    followers: [],

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
