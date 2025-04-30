import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import {
  LayoutContextProvider,
  MessagesProvider,
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
        { path: "/workspace/messages", element: <AllPeople /> },
        { path: "/workspace/activity", element: <AllPeople /> },
        { path: "/workspace/templates", element: <AllPeople /> },
        { path: "/workspace/people", element: <AllPeople /> },
        { path: "/workspace/channels", element: <Channels /> },
        { path: "/workspace/automations", element: <Channels /> },
        { path: "/workspace/canvases", element: <Channels /> },
        { path: "/workspace/files", element: <Channels /> },
        { path: "/workspace/econnections", element: <Channels /> },
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
      <MessagesProvider>
        <LayoutContextProvider>
          <RouterProvider router={router} />
        </LayoutContextProvider>
      </MessagesProvider>
    </WorkspaceContextProvider>
  </UserDataProvider>
);
