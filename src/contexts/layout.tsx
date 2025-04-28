import { createContext, useContext, useState } from "react";

type LayoutContextType = {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
};

const LayoutContext = createContext<LayoutContextType>({
  collapse: false,
  setCollapse: () => {},
});

export const useLayoutContext = () => useContext(LayoutContext);

export const LayoutContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <LayoutContext.Provider
      value={{
        collapse,
        setCollapse,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
