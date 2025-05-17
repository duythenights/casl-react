import type { ReactNode } from "react";
import { useAbilityStore } from "../casl/abitityStore";
import type { Actions } from "../casl/types/ability";
import type { SubjectCasl } from "../../pages/login/types/login.type";

interface ProtectedRouteProps {
  abilityAction: Actions; // e.g. "view"
  abilitySubject: SubjectCasl; // e.g. "DashboardPage"
  children: ReactNode;
  fallback?: ReactNode; // nếu ko đủ quyền, hiển thị gì
}

const ProtectedRoute = ({
  abilityAction,
  abilitySubject,
  children,
  fallback = <div>Access Denied</div>,
}: ProtectedRouteProps) => {
  const ability = useAbilityStore((state) => state.ability);

  if (ability.can(abilityAction, abilitySubject)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};

export default ProtectedRoute;
