import { useLocalStorage } from "usehooks-ts";
import type { PermissionDetail, User } from "../pages/login/types/login.type";

export const useCustomLocalStorage = () => {
  const [token, setToken, removeToken] = useLocalStorage<string | null>(
    "token",
    null
  );
  const [user, setUser, removeUser] = useLocalStorage<User | null>(
    "user",
    null
  );
  const [permissions, setPermissions, removePermissions] = useLocalStorage<
    PermissionDetail[]
  >("permissions", []);

  return {
    token,
    setToken,
    removeToken,
    user,
    setUser,
    removeUser,
    permissions,
    setPermissions,
    removePermissions,
  };
};
