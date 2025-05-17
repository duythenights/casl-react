import { create } from "zustand";
import { AppAbilityClass, type AppAbility } from "./types/ability";
import type { PermissionDetail } from "../../pages/login/types/login.type";
import { buildAbilityFromPermissions } from "./buildAbitity";

interface AbilityState {
  ability: AppAbility;
  setPermissions: (permissions: PermissionDetail[]) => void;
}

export const useAbilityStore = create<AbilityState>((set) => ({
  ability: new AppAbilityClass([]),
  setPermissions: (permissions) => {
    const ability = buildAbilityFromPermissions(permissions);
    set({ ability });
  },
}));
