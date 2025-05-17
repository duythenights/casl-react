import type { RouteObject } from "react-router";
import AuthLayout from "../../../components/layout/AuthLayout";
import DashboardPage from "../../../pages/dashboard/DashboardPage";
import LoginPage from "../../../pages/login/LoginPage";
import type { SubjectCasl } from "../../../pages/login/types/login.type";
import ReportPage from "../../../pages/report/ReportPage";
import type { Actions } from "../../casl/types/ability";
import ProtectedRoute from "../ProtectedRoute";
import { ROUTE_PATH } from "./react-router.constants";

export type AppRoute = Omit<RouteObject, "children"> & {
  children?: AppRoute[]; // khai  báo lại

  // for menu
  abilityAction?: Actions;
  abilitySubject?: SubjectCasl;
  title?: string;
  icon?: React.ReactNode;
};

export function mapRoutes(routes: AppRoute[]): RouteObject[] {
  return routes.map(
    ({ children, element, abilityAction, abilitySubject, ...rest }) =>
      ({
        ...rest,
        element:
          abilityAction && abilitySubject ? (
            <ProtectedRoute
              abilityAction={abilityAction}
              abilitySubject={abilitySubject}
            >
              {element}
            </ProtectedRoute>
          ) : (
            element
          ),
        children: children ? mapRoutes(children) : undefined,
      } as RouteObject)
  );
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <div>Home page</div>,
    title: "Home",
  },
  {
    path: "/login",
    element: <LoginPage />,
    title: "Login",
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: ROUTE_PATH.DASHBOARD,
        element: <DashboardPage />,
        abilityAction: "view",
        abilitySubject: "DashboardViewStatistic",
        title: "Dashboard",
      },
      {
        path: ROUTE_PATH.REPORT,
        element: <ReportPage />,
        abilityAction: "view",
        abilitySubject: "ReportSiteViewNC",
        title: "Report",
      },
    ],
  },
];
