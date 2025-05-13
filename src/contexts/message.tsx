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
        content:
          "<img src='https://ca.slack-edge.com/T04DR8P7QSX-U07BQHBHAV6-2f2435a96a1a-512' class='rounded-sm size-9' /> <div class='flex flex-col'><div class='flex flex-row gap-2 h-fit'><span class='text-white font-semibold text-[15px]'>Test Test</span><span class='text-xs text-[#6F6F6F] my-auto'>9:44 AM</span></div><p class='text-white font-lato'>것이 밥을 하는 산야에 얼마나 이 보라. 미인을 것은 아름답고투명하되 미묘한 내려온 시들어 없는 꽃이 듣는다. 우는인생에 그들에게 것이 교향악이다. 자신과 인류의 인간에날카로우나 못할 피다. 뼈의 그들은 있</p>",
        date: "04.16.2025",
      },
      {
        id: "CWmBuMQmrYioOFiIi94y",
        channelId: "4QBgJ84ykpjTBKzLj63h",
        content:
          "<img src='https://ca.slack-edge.com/T04DR8P7QSX-U07BQHBHAV6-2f2435a96a1a-512' class='rounded-sm size-9' /> <div class='flex flex-col'><div class='flex flex-row gap-2 h-fit'><span class='text-white font-semibold text-[15px]'>Test Test2</span><span class='text-xs text-[#6F6F6F] my-auto'>9:44 AM</span></div><p class='text-white font-lato'>것이 밥을 하는 산야에 얼마나 이 보라. 미인을 것은 아름답고투명하되 미묘한 내려온 시들어 없는 꽃이 듣는다. 우는인생에 그들에게 것이 교향악이다. 자신과 인류의 인간에날카로우나 못할 피다. 뼈의 그들은 있</p>",
        date: "04.16.2025",
      },
      {
        id: "CWmBuMQmrYioOFiIi94y",
        channelId: "Z8hOz3sXZJNtvSdsadezyPVJ",
        content:
          "<img src='https://ca.slack-edge.com/T04DR8P7QSX-U07BQHBHAV6-2f2435a96a1a-512' class='rounded-sm size-9' /> <div class='flex flex-col'><div class='flex flex-row gap-2 h-fit'><span class='text-white font-semibold text-[15px]'>Test Test2</span><span class='text-xs text-[#6F6F6F] my-auto'>9:44 AM</span></div><p class='text-white font-lato'>것이 밥을 하는 산야에 얼마나 이 보라. 미인을 것은 아름답고투명하되 미묘한 내려온 시들어 없는 꽃이 듣는다. 우는인생에 그들에게 것이 교향악이다. 자신과 인류의 인간에날카로우나 못할 피다. 뼈의 그들은 있</p>",
        date: "04.16.2025",
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
