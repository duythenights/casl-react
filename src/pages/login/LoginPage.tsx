import { useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useCustomLocalStorage } from "../../hooks/useCustomLocalStorage";
import { useAbilityStore } from "../../lib/casl/abitityStore";
import { ROUTE_PATH } from "../../lib/react-router/services/react-router.constants";
import permissionAfterLogin from "../../note";
import type { PermissionDetail } from "./types/login.type";

export default function LoginPage() {
  const setPermissions = useAbilityStore((state) => state.setPermissions);
  const {
    permissions,
    setPermissions: setPermissionsLC,
    setToken,
    token,
  } = useCustomLocalStorage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const checkFirstAccessibleUrlThenNavigate = useCallback(
    (perList: PermissionDetail[]) => {
      const firstAccessible = perList.find(
        (perm) => perm.detailUrl && perm.detailUrl.trim() !== ""
      );

      if (firstAccessible) {
        navigate(firstAccessible.detailUrl as string);
      } else {
        navigate(ROUTE_PATH.DASHBOARD);
      }
    },
    [navigate]
  );

  const handleLogin = () => {
    setTimeout(() => {
      const allPermissionDetails = permissionAfterLogin.flatMap(
        (p) => p.permissionDetails
      ) as PermissionDetail[];

      setPermissions(allPermissionDetails);
      setPermissionsLC(allPermissionDetails);
      setToken("hehe");

      const callbackUrl = searchParams.get("callbackUrl") ?? "";

      // Kiểm tra callbackUrl có trong permissions không
      const hasPermissionForCallback = allPermissionDetails.some(
        (perm) => perm.detailUrl && perm.detailUrl.trim() === callbackUrl.trim()
      );

      if (callbackUrl && hasPermissionForCallback) {
        navigate(callbackUrl);
      } else {
        // fallback url: url đầu tiên user có permission truy cập
        checkFirstAccessibleUrlThenNavigate(allPermissionDetails);
      }
    }, 500);
  };

  useEffect(() => {
    if (token && permissions && permissions.length > 1) {
      checkFirstAccessibleUrlThenNavigate(permissions);
    }
  }, [token, permissions, checkFirstAccessibleUrlThenNavigate]);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
