// types/ability.ts
import { type AbilityClass, PureAbility } from "@casl/ability";
import type { SubjectCasl } from "../../../pages/login/types/login.type";

export type Actions =
  | "view"
  | "edit"
  | "export"
  | "create"
  | "detail"
  | "import"
  | "report"
  | "action";

export type AppAbility = PureAbility<[Actions, SubjectCasl]>;

export const AppAbilityClass: AbilityClass<AppAbility> =
  PureAbility as AbilityClass<AppAbility>;
