import { createRoot } from "react-dom/client";
import "./index.css";
import {
  LayoutContextProvider,
  MessagesProvider,
  UserDataProvider,
  WorkspaceContextProvider,
} from "@/contexts";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";

createRoot(document.getElementById("root")!).render(
  <UserDataProvider>
    <WorkspaceContextProvider>
      <MessagesProvider>
        <LayoutContextProvider>
          <RouterProvider router={router} />
        </LayoutContextProvider>
      </MessagesProvider>
    </WorkspaceContextProvider>
  </UserDataProvider>
);
