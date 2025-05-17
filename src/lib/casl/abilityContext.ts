import { createContextualCan } from "@casl/react";
import { createContext } from "react";
import type { AppAbility } from "./types/ability";
export const AbilityContext = createContext<AppAbility>(undefined!);

export const Can = createContextualCan(AbilityContext.Consumer);
