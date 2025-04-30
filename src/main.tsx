import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import {
  LayoutContextProvider,
  UserDataProvider,
  WorkspaceContextProvider,
} from "@/contexts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllPeople, Channels, Home, WorkspaceMain } from "@/pages";
import { WorkspaceLayout, UserLayout } from "@/components";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <UserLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "/workspace/",
      element: <WorkspaceLayout />,
      children: [
        { path: "/workspace/", element: <WorkspaceMain /> },
        { path: "/workspace/people", element: <AllPeople /> },
        { path: "/workspace/channels", element: <Channels /> },
      ],
    },
  ],
  {
    basename: "/",
  }
);

createRoot(document.getElementById("root")!).render(
  <UserDataProvider>
    <WorkspaceContextProvider>
      <LayoutContextProvider>
        <RouterProvider router={router} />
      </LayoutContextProvider>
    </WorkspaceContextProvider>
  </UserDataProvider>
);
