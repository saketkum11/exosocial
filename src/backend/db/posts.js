import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    firstName: "Taran",
    lastName: "",
    username: "Tarandeep_s1ngh",
    avatarURL:
      "	https://pbs.twimg.com/profile_images/1474058881626099716/xW_TLk6h_200x200.jpg",
    content:
      " Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.",
    likes: {
      likeCount: 19,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Madhushree",
        lastName: "Kunder",
        username: "Madhushree_K5",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1279662538125262848/l4H6Xz-L_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Pavan",
        lastName: "Kumar",
        username: "_kpavan",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1478270579220176903/_kAffu3W_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "03/01/2022".toString(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ritik",
    lastName: "Patel",
    username: "ritik_patel05",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1433801904916611074/wjfFL1Js_200x200.jpg",
    content:
      "Don't let the expectations and opinions of other people affect your decisions. It's your life, not theirs. Do what matters most to you; do what makes you feel alive and happy. Don't let the expectations and ideas of others limit who you are. If you let others tell you who you are, you are living their reality — not yours. There is more to life than pleasing people. There is much more to life than following others' prescribed path. There is so much more to life than what you experience right now. You need to decide who you are for yourself. Become a whole being. Adventure.",
    likes: {
      likeCount: 100,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Taran",
        lastName: "",
        username: "Tarandeep_s1ngh",
        avatarURL:
          "	https://pbs.twimg.com/profile_images/1474058881626099716/xW_TLk6h_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Madhushree",
        lastName: "Kunder",
        username: "Madhushree_K5",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1279662538125262848/l4H6Xz-L_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "02/25/2022".toString(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Madhushree",
    lastName: "Kunder",
    username: "Madhushree_K5",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1279662538125262848/l4H6Xz-L_200x200.jpg",
    content:
      "Even if you cannot change all the people around you, you can change the people you choose to be around. Life is too short to waste your time on people who don’t respect, appreciate, and value you. Spend your life with people who make you smile, laugh, and feel loved.",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Ritik",
        lastName: "Patel",
        username: "ritik_patel05",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1433801904916611074/wjfFL1Js_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "01/01/2022".toString(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Pavan",
    lastName: "Kumar",
    username: "_kpavan",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1478270579220176903/_kAffu3W_200x200.jpg",
    content:
      "Be grateful for what you already have while you pursue your goals.If you aren’t grateful for what you already have, what makes you think you would be happy with more.",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Atul",
        lastName: "Pant",
        username: "AtulPant2704",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1445429216737050625/B4IJkZxo_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Madhushree",
        lastName: "Kunder",
        username: "Madhushree_K5",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1279662538125262848/l4H6Xz-L_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "05/01/2022".toString(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Atul",
    lastName: "Pant",
    username: "AtulPant2704",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1445429216737050625/B4IJkZxo_200x200.jpg",
    content:
      "It's worth making time to find the things that really stir your soul. That’s what makes you really feel alive. You have to say ‘no’ to other things you’re used to, and do it with all your heart.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Ritik",
        lastName: "Patel",
        username: "ritik_patel05",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1433801904916611074/wjfFL1Js_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "02/01/2022".toString(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Saket",
    lastName: "kumar",
    username: "saket601",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1459765251486851078/FdFG6z1X_200x200.jpg",
    content:
      "Is your reading and research supplementing your actions or substituting for them? Research is useful until it becomes a form of procrastination.",
    likes: {
      likeCount: 49,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Saket",
        lastName: "kumar",
        username: "saket601",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1459765251486851078/FdFG6z1X_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Atul",
        lastName: "Pant",
        username: "AtulPant2704",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1445429216737050625/B4IJkZxo_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Ritik",
        lastName: "Patel",
        username: "ritik_patel05",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1433801904916611074/wjfFL1Js_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "01/01/2022".toString(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Saket",
    lastName: "kumar",
    username: "saket601",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1459765251486851078/FdFG6z1X_200x200.jpg",
    content:
      "The person who is brave enough to bet on something or someone—as long as they avoid irreversible mistakes like running out of cash or going to jail—is in a position to win.",
    likes: {
      likeCount: 78,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Ritik",
        lastName: "Patel",
        username: "ritik_patel05",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1433801904916611074/wjfFL1Js_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Saket",
        lastName: "kumar",
        username: "saket601",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1459765251486851078/FdFG6z1X_200x200.jpg",
        text: "Its dope",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "03/01/2022".toString(),
    updatedAt: formatDate(),
  },
];
