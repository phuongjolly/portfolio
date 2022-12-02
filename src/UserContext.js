import { createContext } from "react";
import { useContext } from "react";

export const UserContext = createContext(null);

export function useCurrentUser() {
  const currentUser = useContext(UserContext);
  return currentUser;
}
