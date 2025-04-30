import { ChannelsI, WorkSpaceI } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type WorkspaceContextType = {
  channelDatas: ChannelsI[];
  setChannelDatas: React.Dispatch<React.SetStateAction<ChannelsI[]>>;

  workspaces: WorkSpaceI[];
  setWorkspaces: React.Dispatch<React.SetStateAction<WorkSpaceI[]>>;
};

const WorkspaceContext = createContext<WorkspaceContextType>({
  channelDatas: [],
  setChannelDatas: () => {},

  workspaces: [],
  setWorkspaces: () => {},
});

export const useWorkspaceContext = () => useContext(WorkspaceContext);

export const WorkspaceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [channelDatas, setChannelDatas] = useState<ChannelsI[]>([]);

  const [workspaces, setWorkspaces] = useState<WorkSpaceI[]>([]);

  useEffect(() => {
    setChannelDatas([
      {
        id: "4QBgJ84ykpjTBKzLj63h",
        created_by: {
          date: "02.21.2023",
          owner: "uvGWgBUMyVRGhHNrd7IK",
        },
        description: "test",
        name: "karabuk_ofis",
        public: true,
        members: ["NEVpDiIIn02JSYaYpXnj", "uvGWgBUMyVRGhHNrd7IK"],
      },
      {
        id: "Z8hOz3sXZJNtvSezyPVJ",
        created_by: {
          date: "02.21.2023",
          owner: "NEVpDiIIn02JSYaYpXnj",
        },
        description: "test",
        members: ["NEVpDiIIn02JSYaYpXnj", "uvGWgBUMyVRGhHNrd7IK"],
        name: "coffe-break",
        public: false,
      },
      {
        id: "Z8hOz3sXZJNtvSdsadezyPVJ",
        created_by: {
          date: "02.21.2023",
          owner: "NEVpDiIIn02JSYaYpXnj",
        },
        description: "test",
        members: ["NEVpDiIIn02JSYaYpXnj", "uvGWgBUMyVRGhHNrd7IK"],
        name: "show-test",
        public: false,
      },
      {
        id: "Z8hOz3sXZJNtvSdsadezyPVdJ",
        created_by: {
          date: "02.21.2023",
          owner: "NEVpDiIIn02JSYaYpXnj",
        },
        description: "test",
        members: ["NEVpDiIIn02JSYaYpXnj", "uvGWgBUMyVRGhHNrd7IK"],
        name: "show-test-public",
        public: true,
      },
    ]);

    setWorkspaces([
      {
        id: "innoventures_user_001",
        title: "InnoVentures",
        url: "innoventures-tech.slack.com",
        premium: true,
        photo: undefined,
        premium_date: {
          day: 29,
          month: 4,
        },
        channels: ["4QBgJ84ykpjTBKzLj63h", "Z8hOz3sXZJNtvSezyPVJ"],
        users: ["NEVpDiIIn02JSYaYpXnj", "uvGWgBUMyVRGhHNrd7IK"],
      },
      {
        id: "innoventures_user_0012",
        title: "Inno Ventures 2",
        photo:
          "https://ca.slack-edge.com/T04DR8P7QSX-U07BQHBHAV6-2f2435a96a1a-512",
        url: "innoventures-tech.slack.com2",
        premium: false,
        channels: [
          "4QBgJ84ykpjTBKzLj63h",
          "Z8hOz3sXZJNtvSdsadezyPVJ",
          "Z8hOz3sXZJNtvSdsadezyPVdJ",
        ],
        users: ["NEVpDiIIn02JSYaYpXnj", "uvGWgBUMyVRGhHNrd7IK"],
      },
    ]);
  }, []);

  return (
    <WorkspaceContext.Provider
      value={{
        channelDatas,
        setChannelDatas,
        workspaces,
        setWorkspaces,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export default WorkspaceContextProvider;
