// Menu.tsx

import { Link } from "react-router";
import { useAbilityStore } from "../../lib/casl/abitityStore";
import { appRoutes } from "../../lib/react-router/services/appRoutes";

export default function Menu() {
  const ability = useAbilityStore((state) => state.ability);

  // Lọc ra những route mà user có quyền xem (nếu có abilityAction + abilitySubject)
  const accessibleRoutes = appRoutes.filter((route) => {
    if (
      route.abilityAction &&
      route.abilityAction === "view" &&
      route.abilitySubject
    ) {
      return ability.can(route.abilityAction, route.abilitySubject);
    }
    return true; // route ko cần bảo vệ thì luôn hiển thị
  });

  return (
    <nav>
      <ul>
        {accessibleRoutes.map((route) => (
          <li key={route.path}>
            <Link to={route.path as string}>{route.title || route.path}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
