import { useQuill } from "react-quilljs";
import { MdOutlineAddReaction } from "react-icons/md";
import "quill/dist/quill.snow.css";
import {
  useLayoutContext,
  useMesageContext,
  useWorkspaceContext,
} from "@/contexts";
import { useLocation } from "react-router-dom";
import { Button } from "@/components";

export const Message = () => {
  const { quillRef } = useQuill();
  const { messages } = useMesageContext();
  const { channelDatas } = useWorkspaceContext();
  const { activeChannelId } = useLayoutContext();

  const activeChannelData = channelDatas.find(
    (data) => data.id === activeChannelId
  );

  const messagesData = messages.filter(
    (data) => data.channelId === activeChannelData?.id
  );

  const location = useLocation();

  return (
    <>
      {location.pathname === `/workspace/${activeChannelId}` && (
        <div className="gap-3 flex flex-col w-full h-full">
          {messagesData.length > 0 ? (
            messagesData.map((data, index) => (
              <div
                key={index}
                className="flex flex-row relative w-full hover:bg-white/10 transition-all gap-3 px-7 py-2 group"
              >
                <div
                  className="flex flex-row gap-3"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
                <div className="hidden flex-row absolute right-5 py-1 px-2 bg-white rounded-md border border-message_action_menu_border group-hover:flex">
                  <Button className="hover:bg-black/10 transition-all">
                    <MdOutlineAddReaction className="text-sm" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex absolute text-white/50 font-lato font-semibold text-xl top-[47%] justify-center w-full">
              Bu kanalda mesaj yok
            </div>
          )}

          <div className="flex flex-col w-full absolute bottom-10 px-5">
            <div className="w-full h-[100px]">
              <div
                ref={quillRef}
                className="text-white"
                style={{
                  fontFamily: "Lato",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
