import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
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
  {
    _id: uuid(),
    firstName: "Mani",
    lastName: "Kandan",
    username: "_manismk",
    password: "mani123",
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
    avatarURL:
      "https://pbs.twimg.com/profile_images/1430758653854851081/U1Kid3e7_200x200.jpg",
    bio: "Learning web development @neogcamp'22 | Tweets about accessibility and my web dev journey.",
    website: "manikandan.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
