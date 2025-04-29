import { UsersI } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type DataContextType = {
  userList: UsersI[];
  setUserList: React.Dispatch<React.SetStateAction<UsersI[]>>;

  userData: UsersI | null;
  setUserData: React.Dispatch<React.SetStateAction<UsersI | null>>;
};

const DataContext = createContext<DataContextType>({
  userList: [],
  setUserList: () => {},

  userData: {
    id: "",
    name: "",
    photo: "",
    contact_info: {
      email: "",
      phone: "",
    },
    display_name: "",
    email: "",
    local_time: "",
    status: "ONLINE",
    title: null,
  },
  setUserData: () => {},
});

export const useUsersContext = () => useContext(DataContext);

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userList, setUserList] = useState<UsersI[]>([]);
  const [userData, setUserData] = useState<UsersI | null>(null);

  useEffect(() => {
    setUserList([
      {
        id: "uvGWgBUMyVRGhHNrd7IK",
        name: "Berkant Kazangirler",
        photo:
          "https://ca.slack-edge.com/T04DR8P7QSX-U07BQHBHAV6-2f2435a96a1a-512",
        contact_info: {
          email: "berkantkazangirler@gmail.com",
          phone: "0544 339 0993",
        },
        display_name: "Berkant",
        email: "berkantkazangirler@gmail.com",
        local_time: "UTC",
        status: "ONLINE",
        title: null,
      },
    ]);

    setUserData({
      id: "uvGWgBUMyVRGhHNrd7IK",
      name: "Berkant Kazangirler",
      photo:
        "https://ca.slack-edge.com/T04DR8P7QSX-U07BQHBHAV6-2f2435a96a1a-512",
      contact_info: {
        email: "berkantkazangirler@gmail.com",
        phone: "0544 339 0993",
      },
      display_name: "Berkant",
      email: "berkantkazangirler@gmail.com",
      local_time: "UTC",
      status: "ONLINE",
      title: null,
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        userList,
        setUserList,
        userData,
        setUserData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default UserDataProvider;
