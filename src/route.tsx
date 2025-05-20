import { createBrowserRouter } from "react-router-dom";
import { AllPeople, BrowseChannels, Home } from "@/pages";
import {
  ChannelLayout,
  MessageLayout,
  UserLayout,
  WorkspaceLayout,
} from "@/layout";

export const router = createBrowserRouter(
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
        { index: true, element: <ChannelLayout /> },
        { path: "messages", element: <AllPeople /> },
        { path: "activity", element: <AllPeople /> },
        { path: "templates", element: <AllPeople /> },
        { path: "people", element: <AllPeople /> },
        { path: "channels", element: <BrowseChannels /> },
        { path: "automations", element: <BrowseChannels /> },
        { path: "canvases", element: <BrowseChannels /> },
        { path: "files", element: <BrowseChannels /> },
        { path: "econnections", element: <BrowseChannels /> },

        {
          path: ":id",
          element: <ChannelLayout />,
          children: [
            { path: "files", element: <ChannelLayout /> },
            { path: "untitled", element: <ChannelLayout /> },
          ],
        },

        {
          path: "message/:id",
          element: <MessageLayout />,
          children: [
            {
              path: "canvas",
              element: <MessageLayout />,
            },
            {
              path: "files",
              element: <MessageLayout />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);
