import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { RepositoryContextType, UserContextType } from "../Global/Types";
import { RepositoryContext } from "../context/RepositoryContext";

export const useUserName = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser can not be used without context");
  }
  return context;
};

export const useRepositoryName = (): RepositoryContextType => {
  const context = useContext(RepositoryContext);
  if (!context) {
    throw new Error("useRepository can not be used without context");
  }
  return context;
};
