import { createContext, useContext, useState } from "react";

type LayoutContextType = {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const LayoutContext = createContext<LayoutContextType>({
  collapse: false,
  setCollapse: () => {},
  theme: "mood-indigo",
  setTheme: () => {},
});

export const useLayoutContext = () => useContext(LayoutContext);

export const LayoutContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("mood-indigo");

  return (
    <LayoutContext.Provider
      value={{
        collapse,
        setCollapse,
        theme,
        setTheme,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
