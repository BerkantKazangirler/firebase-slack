import { createContext, useContext, useState } from "react";

type LayoutContextType = {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  activeWorkspace: string | null;
  setActiveWorkspace: React.Dispatch<React.SetStateAction<string | null>>;
  activeChannelId: string | null;
  setActiveChannelId: React.Dispatch<React.SetStateAction<string | null>>;
};

const LayoutContext = createContext<LayoutContextType>({
  collapse: false,
  setCollapse: () => {},
  theme: "mood-indigo",
  setTheme: () => {},
  activeWorkspace: "",
  setActiveWorkspace: () => {},
  activeChannelId: "",
  setActiveChannelId: () => {},
});

export const useLayoutContext = () => useContext(LayoutContext);

export const LayoutContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("mood-indigo");

  const [activeWorkspace, setActiveWorkspace] = useState<string | null>(
    "innoventures_user_001"
  );
  const [activeChannelId, setActiveChannelId] = useState<string | null>(
    "4QBgJ84ykpjTBKzLj63h"
  );

  return (
    <LayoutContext.Provider
      value={{
        collapse,
        setCollapse,
        theme,
        setTheme,
        activeWorkspace,
        setActiveWorkspace,
        activeChannelId,
        setActiveChannelId,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
