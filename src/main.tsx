import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AbilityProvider from "./lib/casl/AbilityProvider";
import MainRouter from "./lib/react-router/MainRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AbilityProvider>
      <MainRouter />
    </AbilityProvider>
  </StrictMode>
);
