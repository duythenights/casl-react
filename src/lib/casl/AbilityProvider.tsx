import React from "react";
import { AbilityContext } from "./abilityContext";
import { useAbilityStore } from "./abitityStore";

export default function AbilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const ability = useAbilityStore((state) => state.ability);
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
}
