import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  LayoutContextProvider,
  UserDataProvider,
  WorkspaceContextProvider,
} from "@/contexts";

createRoot(document.getElementById("root")!).render(
  <UserDataProvider>
    <WorkspaceContextProvider>
      <LayoutContextProvider>
        <App />
      </LayoutContextProvider>
    </WorkspaceContextProvider>
  </UserDataProvider>
);
