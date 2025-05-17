import { useEffect } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router";
import { useCustomLocalStorage } from "../../hooks/useCustomLocalStorage";
import { useAbilityStore } from "../casl/abitityStore";
import { appRoutes, mapRoutes } from "./services/appRoutes";

const InitApp = () => {
  const navigate = useNavigate();
  const { token, permissions } = useCustomLocalStorage();

  const setPermissions = useAbilityStore((state) => state.setPermissions);
  useEffect(() => {
    if (permissions && permissions.length > 0) {
      setPermissions(permissions);
    }
  }, [token, permissions, navigate, setPermissions]);

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    element: <InitApp />,
    children: mapRoutes(appRoutes),
  },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;
