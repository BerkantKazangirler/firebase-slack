import { MessagesI } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type MessageContextType = {
  messages: MessagesI[];
  setMessages: React.Dispatch<React.SetStateAction<MessagesI[]>>;
};

const MessageDataContext = createContext<MessageContextType>({
  messages: [],
  setMessages: () => {},
});

export const useMesageContext = () => useContext(MessageDataContext);

export const MessagesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessages] = useState<MessagesI[]>([]);

  useEffect(() => {
    setMessages([
      {
        id: "CWmBuMQmrYioOFiIi94y",
        channelId: "4QBgJ84ykpjTBKzLj63h",
        content: "test",
        date: [
          {
            date: "04.16.2025",
            time: "5:06 PM",
          },
        ],
        sender_by: "uvGWgBUMyVRGhHNrd7IK",
      },
    ]);
  }, []);

  return (
    <MessageDataContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {children}
    </MessageDataContext.Provider>
  );
};

export default MessagesProvider;
