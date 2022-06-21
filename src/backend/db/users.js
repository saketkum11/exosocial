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
    username: "saket11",
    password: "saket123",
    email: "saket601@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
