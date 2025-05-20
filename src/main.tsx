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
import { AllPeople, BrowseChannels, Home } from "@/pages";
import {
  ChannelLayout,
  MessageLayout,
  UserLayout,
  WorkspaceLayout,
} from "@/layout";

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
        { path: "/workspace/", element: <ChannelLayout /> },
        { path: "/workspace/:id", element: <ChannelLayout /> },
        { path: "/workspace/:id/message", element: <ChannelLayout /> },
        { path: "/workspace/:id/files", element: <ChannelLayout /> },
        { path: "/workspace/:id/untitled", element: <ChannelLayout /> },

        { path: "/workspace/message/:id", element: <MessageLayout /> },
        { path: "/workspace/message/:id/canvas", element: <MessageLayout /> },
        { path: "/workspace/message/:id/files", element: <MessageLayout /> },

        { path: "/workspace/messages", element: <AllPeople /> },
        { path: "/workspace/activity", element: <AllPeople /> },
        { path: "/workspace/templates", element: <AllPeople /> },
        { path: "/workspace/people", element: <AllPeople /> },
        { path: "/workspace/channels", element: <BrowseChannels /> },
        { path: "/workspace/automations", element: <BrowseChannels /> },
        { path: "/workspace/canvases", element: <BrowseChannels /> },
        { path: "/workspace/files", element: <BrowseChannels /> },
        { path: "/workspace/econnections", element: <BrowseChannels /> },
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
