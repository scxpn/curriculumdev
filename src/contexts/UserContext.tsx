import { User } from "../utils/types";
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";

type Props = {
  children: ReactNode;
};

interface UserContextType {
  setUser: (user: any) => void;
  user: any;
  setUserId: (id: string) => void;
  userId: string;
}

const data: UserContextType = {
  setUser: () => null,
  user: null,
  setUserId: () => null,
  userId: "",
};
const UserContext = createContext(data);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | any>(null);
  const [userId, setUserId] = useState<string>("");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: setUser,
        userId,
        setUserId: setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
