import { ReactNode, createContext, useState } from "react";

type UserProps = {
  name: string;
};

type UserContextProps = {
  user: UserProps | null;
  setUser: (value: UserProps | null) => void; 
};

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {}, 
});

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
