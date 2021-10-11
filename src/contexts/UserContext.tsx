import { User, Repositories } from "../utils/types";
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
  repositories: Repositories[] | null;
}

const data: UserContextType = {
  setUser: () => null,
  user: null,
  setUserId: () => null,
  userId: "",
  repositories: null,
};
const UserContext = createContext(data);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: Props) {
  const apiBase = "https://api.github.com/users";
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string>("scxpn");
  const [repos, setRepos] = useState<[Repositories] | null>(null);

  useEffect(() => {
    if (userId !== "") {
      fetch(`${apiBase}/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [userId]);

  useEffect(() => {
    if (user && user?.repos_url) {
      fetch(user?.repos_url)
        .then((res) => res.json())
        //@ts-ignore
        .then((data) => setRepos(() => [...data]));
    }
  }, [userId, user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: setUser,
        userId,
        setUserId: setUserId,
        repositories: repos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
