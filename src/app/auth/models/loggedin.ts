import { User } from "./user";

export interface LoggedInUser {
  accessToken: string;
  user: User;
}
