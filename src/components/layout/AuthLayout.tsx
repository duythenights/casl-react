import { isEmpty } from "lodash";
import { Navigate, Outlet } from "react-router";
import { useCustomLocalStorage } from "../../hooks/useCustomLocalStorage";
import { ROUTE_PATH } from "../../lib/react-router/services/react-router.constants";

export default function AuthLayout() {
  const { token, permissions } = useCustomLocalStorage();
  if (!token || isEmpty(permissions)) {
    return <Navigate to={ROUTE_PATH.LOGIN} />;
  }
  return (
    <div>
      {/* <Menu /> */}
      <h2>Header here</h2>
      <Outlet />
    </div>
  );
}
