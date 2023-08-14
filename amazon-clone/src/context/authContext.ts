import { createContext } from "react";
import { GoogleToken } from "../types";

interface currentUserContextType {
  signIn: (value: GoogleToken) => void;
  signOut: (value: GoogleToken) => void;
}
const AuthContext = createContext<currentUserContextType | null>(null);

export default AuthContext;
