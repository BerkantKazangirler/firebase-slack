import { UsersI } from "@/types";
import { fetch } from "@/utils/fetch-data";
import { createContext, useContext, useEffect, useState } from "react";

type DataContextType = {
  userData: UsersI[];
  setUserData: React.Dispatch<React.SetStateAction<UsersI[]>>;
};

const DataContext = createContext<DataContextType>({
  userData: [],
  setUserData: () => {},
});

export const useUsersContext = () => useContext(DataContext);

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userData, setUserData] = useState<UsersI[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const sectionDataFetch = await fetch("users");
        setUserData(sectionDataFetch);
      } catch (error) {
        console.log("hata : " + error);
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default UserDataProvider;
