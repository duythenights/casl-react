import { AbilityBuilder } from "@casl/ability";
import type { PermissionDetail } from "../../pages/login/types/login.type";
import {
  AppAbilityClass,
  type Actions,
  type AppAbility,
} from "./types/ability";

const actionMap: { [key: string]: Actions } = {
  View: "view",
  Edit: "edit",
  Export: "export",
  Create: "create",
  Detail: "detail",
  Import: "import",
  Report: "report",
  Action: "action",
};

function getActionFromNameKey(nameKey: string): Actions {
  const foundKey = Object.keys(actionMap).find((key) => nameKey.includes(key));
  if (!foundKey) {
    console.error(`Unexpected key found!!!:: ${nameKey}`);
  }
  return foundKey ? actionMap[foundKey] : "view";
}

export function buildAbilityFromPermissions(
  permissions: PermissionDetail[]
): AppAbility {
  const { can, rules } = new AbilityBuilder<AppAbility>(AppAbilityClass);

  permissions.forEach((detail) => {
    const action = getActionFromNameKey(detail.nameKey);
    can(action, detail.nameKey);
  });

  return new AppAbilityClass(rules);
}
