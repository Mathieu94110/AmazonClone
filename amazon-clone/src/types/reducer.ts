import { GoogleToken, UserInfo } from "./user";

export type StateInterface = {
  isSignout: boolean;
  googleToken: GoogleToken | null;
  userInfo: UserInfo | null;
};

export type ActionInterface =
  | { type: "SET_USER_INFO"; userInfo: UserInfo }
  | { type: "SIGN_OUT" }
  | { type: "SIGN_IN"; token: GoogleToken };
