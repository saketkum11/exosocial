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
    username: "saket601@gmail.com",
    password: "saket123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
