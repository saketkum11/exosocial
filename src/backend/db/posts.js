import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      " Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profilename: "Anish Shah",
    username: "anish",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Don't let the expectations and opinions of other people affect your decisions. It's your life, not theirs. Do what matters most to you; do what makes you feel alive and happy. Don't let the expectations and ideas of others limit who you are. If you let others tell you who you are, you are living their reality — not yours. There is more to life than pleasing people. There is much more to life than following others' prescribed path. There is so much more to life than what you experience right now. You need to decide who you are for yourself. Become a whole being. Adventure.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profilename: "Shubham Soni",
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Even if you cannot change all the people around you, you can change the people you choose to be around. Life is too short to waste your time on people who don’t respect, appreciate, and value you. Spend your life with people who make you smile, laugh, and feel loved.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profilename: "Gayel John",
    username: "john",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Be grateful for what you already have while you pursue your goals.If you aren’t grateful for what you already have, what makes you think you would be happy with more.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profilename: "Anshika Sharma",
    username: "anshika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "It's worth making time to find the things that really stir your soul. That’s what makes you really feel alive. You have to say ‘no’ to other things you’re used to, and do it with all your heart.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profilename: "Kric Wokes",
    username: "wokes",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
