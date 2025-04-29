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
        members: {
          0: "uvGWgBUMyVRGhHNrd7IK",
          1: "NEVpDiIIn02JSYaYpXnj",
        },
        name: "karabuk_ofis",
        public: true,
      },
      {
        id: "Z8hOz3sXZJNtvSezyPVJ",
        created_by: {
          date: "02.21.2023",
          owner: "NEVpDiIIn02JSYaYpXnj",
        },
        description: "test",
        members: {
          0: "NEVpDiIIn02JSYaYpXnj",
        },
        name: "coffe-break",
        public: false,
      },
    ]);

    setWorkspaces([
      {
        id: "innoventures_user_001",
        title: "InnoVentures",
        url: "innoventures-tech.slack.com",
        premium: true,
        premium_date: {
          day: 29,
          month: 4,
        },
        channels: {
          0: "4QBgJ84ykpjTBKzLj63h",
          1: "Z8hOz3sXZJNtvSezyPVJ",
        },
        users: {
          0: "uvGWgBUMyVRGhHNrd7IK",
          1: "NEVpDiIIn02JSYaYpXnj",
        },
      },
      {
        id: "innoventures_user_0012",
        title: "InnoVentures2",
        url: "innoventures-tech.slack.com2",
        premium: false,
        channels: {
          0: "4QBgJ84ykpjTBKzLj63h",
        },
        users: {
          0: "uvGWgBUMyVRGhHNrd7IK",
          1: "NEVpDiIIn02JSYaYpXnj",
        },
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
