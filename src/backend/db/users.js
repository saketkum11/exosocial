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
    username: "saket601",
    password: "saket123",
    following: [
      {
        _id: uuid(),
        firstName: "Pavan",
        lastName: "Kumar",
        username: "_kpavan",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1478270579220176903/_kAffu3W_200x200.jpg",
      },
      {
        _id: uuid(),
        firstName: "Atul",
        lastName: "Pant",
        username: "AtulPant2704",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1445429216737050625/B4IJkZxo_200x200.jpg",
      },
      {
        _id: uuid(),
        firstName: "Madhushree",
        lastName: "Kunder",
        username: "Madhushree_K5",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1279662538125262848/l4H6Xz-L_200x200.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Ritik",
        lastName: "Patel",
        username: "ritik_patel05",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1433801904916611074/wjfFL1Js_200x200.jpg",
      },
      {
        _id: uuid(),
        firstName: "Taran",
        lastName: "",
        username: "Tarandeep_s1ngh",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
      },
    ],
    avatarURL:
      "https://pbs.twimg.com/profile_images/1459765251486851078/FdFG6z1X_200x200.jpg",
    bio: "Believe It.I am not what I think I am , I am not What  you think I am , I am What I think you think I am. by Prof. Cooley",
    website: "saketkum.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // user 2

  {
    _id: uuid(),
    firstName: "Taran",
    lastName: "singh",
    username: "Tarandeep_s1ngh",
    avatarURL:
      "	https://pbs.twimg.com/profile_images/1474058881626099716/xW_TLk6h_200x200.jpg",
    password: "taran123",
    email: "taran@gmail.com",
    following: [
      {
        _id: uuid(),
        firstName: "Pritam",
        lastName: "Kumar",
        username: "Pritamkr_",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1504867168717983745/m0lXiJrv_200x200.jpg",
      },
      {
        _id: uuid(),
        firstName: "Pratik",
        lastName: "Devle",
        username: "DevlePratik",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1151502848464687104/izhLCDip_200x200.jpg",
      },
      {
        _id: uuid(),
        firstName: "Subham",
        lastName: "Choudhury",
        username: "SubhamC_14",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1499072911772053506/GG5La_Pt_200x200.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Ankit ",
        lastName: "Joshi",
        username: "Ankitjoshi9015",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1459832677016608769/wmk0M4Cv_reasonably_small.jpg",
      },
      {
        _id: uuid(),
        firstName: "Srikar",
        lastName: "",
        username: "jayasrikark",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1414657404843663368/rXyiNk3G_200x200.jpg",
      },
    ],

    bio: "Learning web development @neogcamp'22 | Tweets about accessibility and my web dev journey.",
    website: "taran.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // user 3

  {
    _id: uuid(),
    firstName: "Madhushree",
    lastName: "Kunder",
    username: "Madhushree_K5",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1279662538125262848/l4H6Xz-L_200x200.jpg",
    password: "madhusree123",
    email: "madhusree123",
    following: [
      {
        _id: uuid(),
        firstName: "Nikhil",
        lastName: "_Belide",
        username: "Nikhil_Belide",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1542024739816091649/1Kd8fuje_bigger.jpg",
      },
      {
        _id: uuid(),
        firstName: "Omkar",
        lastName: "Ghate",
        username: "OmkarGhate9",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1417120011492073472/GdzTo6Vn_bigger.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Biswarup",
        lastName: "Bouri",
        username: "BiswarupBouri",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1469195340020543490/MODOrmRn_bigger.jpg",
      },
      {
        _id: uuid(),
        firstName: "Sudarson",
        lastName: "alder",
        username: "SudarsonHalder",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1449702150389465088/hMuZWFVp_bigger.jpg",
      },
    ],

    bio: "I learn,Build,and share it with you people, ",
    website: "madhuseer.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // user 4
  {
    _id: uuid(),
    firstName: "Pavan",
    lastName: "Kumar",
    username: "_kpavan",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1478270579220176903/_kAffu3W_200x200.jpg",
    bio: "Learning and growing with @neogcamp| Documenting my coding journey | Interested in startups",
    email: "pavan@gmail.com",
    website: "pavan.netlify.com",
    following: [
      {
        _id: uuid(),
        firstName: "Ravi",
        lastName: "Kumar",
        username: "ravikumar0403",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1485232137649414147/6aYIKOhH_bigger.jpg",
      },
      {
        _id: uuid(),
        firstName: "Pruthviraj",
        lastName: "",
        username: "pruthviraj528",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1426564594533736450/2BSUHfRX_200x200.jpg",
      },
      {
        _id: uuid(),
        firstName: "Madhushree",
        lastName: "Kunder",
        username: "Madhushree_K5",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1279662538125262848/l4H6Xz-L_200x200.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Ritik",
        lastName: "Patel",
        username: "ritik_patel05",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1433801904916611074/wjfFL1Js_200x200.jpg",
      },
      {
        _id: uuid(),
        firstName: "Taran",
        lastName: "",
        username: "Tarandeep_s1ngh",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
      },
    ],

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // user 5
  {
    _id: uuid(),
    firstName: "Ritik",
    lastName: "Patel",
    username: "ritik_patel05",
    password: "ritik123",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1433801904916611074/wjfFL1Js_200x200.jpg",
    bio: "Front-end @sosimplified | @neogcamp 2022 | Photographer, designer",
    website: "ritik.netlify.com",
    following: [
      {
        _id: uuid(),
        firstName: "Ashish",
        lastName: "Katiyar",
        username: "ashishk2404",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1484795367938195457/-cl54iIv_bigger.jpg",
      },
      {
        _id: uuid(),
        firstName: "Harshita",
        lastName: "Daswani",
        username: "harshi_daswani",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1422678462964240388/ViOygzhj_bigger.jpg",
      },
      {
        _id: uuid(),
        firstName: "Rohit",
        lastName: "",
        username: "G_Rohit_",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1459880878465712130/ervKR6yS_bigger.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pruthviraj",
        lastName: "",
        username: "pruthviraj528",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1426564594533736450/2BSUHfRX_200x200.jpg",
      },
      {
        _id: uuid(),
        firstName: "Ravi",
        lastName: "Kumar",
        username: "ravikumar0403",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1485232137649414147/6aYIKOhH_bigger.jpg",
      },
    ],

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Atul",
    lastName: "Pant",
    username: "AtulPant2704",
    email: "atul@gmail.com",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1445429216737050625/B4IJkZxo_200x200.jpg",
    bio: "Front-end @sosimplified | @neogcamp 2022 | Photographer, designer",
    website: "bio.link/saurabhchirde",
    following: [
      {
        _id: uuid(),
        firstName: "Ashish",
        lastName: "Katiyar",
        username: "ashishk2404",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1484795367938195457/-cl54iIv_bigger.jpg",
      },
      {
        _id: uuid(),
        firstName: "Harshita",
        lastName: "Daswani",
        username: "harshi_daswani",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1422678462964240388/ViOygzhj_bigger.jpg",
      },
      {
        _id: uuid(),
        firstName: "Rohit",
        lastName: "",
        username: "G_Rohit_",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1459880878465712130/ervKR6yS_bigger.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Pruthviraj",
        lastName: "",
        username: "pruthviraj528",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1426564594533736450/2BSUHfRX_200x200.jpg",
      },
      {
        _id: uuid(),
        firstName: "Ravi",
        lastName: "Kumar",
        username: "ravikumar0403",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1485232137649414147/6aYIKOhH_bigger.jpg",
      },
    ],

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
