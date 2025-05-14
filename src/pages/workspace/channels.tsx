import { Button, Input } from "@/components";
import {
  useLayoutContext,
  useUsersContext,
  useWorkspaceContext,
} from "@/contexts";
import { ChannelsI } from "@/types";
import classNames from "classnames";
import { useState } from "react";
import { CgLock } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaHashtag } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Channels = () => {
  const { collapse, activeWorkspace } = useLayoutContext();
  const { userData } = useUsersContext();
  const { channelDatas, workspaces, setChannelDatas } = useWorkspaceContext();
  const [inputText, setInputText] = useState<string>("");

  const joinChannel = (yeniOda: ChannelsI) => {
    const updatedMembers = yeniOda.members.includes(userData.id)
      ? yeniOda.members
      : [...yeniOda.members, userData.id];
    const updatedOda = {
      ...yeniOda,
      members: updatedMembers,
    };
    setChannelDatas([...channelDatas, updatedOda]);
  };

  const leaveChannel = (id: string) => {
    setChannelDatas(channelDatas.filter((data) => data.id !== id));
  };

  return (
    <div
      className={classNames(
        "flex flex-col py-6 gap-4 rounded-md font-lato bg-workspace_menus_bg transition-all duration-300 w-full",
        {
          "translate-x-0": collapse,
          "-translate-x-[69px]": !collapse,
        }
      )}
    >
      <div className="flex flex-row px-8 justify-between w-full">
        <p className="font-bold text-white text-lg">All channels</p>
        <Button className="bg-black py-2 px-3 rounded-lg border border-white/20 font-bold text-sm text-white">
          Create Channel
        </Button>
      </div>
      <div className="w-full px-8 relative">
        <CiSearch className="absolute text-white/60 z-20 text-xl my-1.5 ml-3" />
        <Button
          onClick={() => setInputText("")}
          className={classNames("text-xs text-white/40 absolute right-3 my-2", {
            flex: inputText !== "",
            hidden: inputText == "",
          })}
        >
          Clear
        </Button>
        <Input
          placeholder="Seach for channels"
          value={inputText}
          onChange={(e) => setInputText(e.currentTarget.value)}
          className="bg-input_bg w-full rounded-md indent-10 text-white/80 placeholder:text-white/50 text-sm py-2 border border-white/20 leading-none"
        />
      </div>
      <div className="flex flex-col overflow-y-auto max-h-[790px]">
        <div className="w-full gap-2 py-20 px-24 bg-[#001a2d] flex flex-col border-t border-b border-blue-200/10 relative">
          <span className="text-white/80 font-lato text-xl font-bold">
            Organize your team's conversations
          </span>
          <p className="text-white/60 max-w-[545px]">
            Channels are spaces for gathering all the right people, messages,
            files and tools. Organize them by any project, group, initiative or
            topic of your choosing.
          </p>
          <Button className="bg-black/70 w-fit py-2 px-3 rounded-lg border border-white/20 font-bold text-sm text-white">
            Create Channel
          </Button>
        </div>
        <div className="px-8 pt-4">
          <div className="flex flex-col h-full bg-input_bg rounded-xl w-full">
            {workspaces
              .filter((data) => data.id == activeWorkspace)
              ?.map((data) => (
                <>
                  {channelDatas
                    .filter(
                      (dataa) =>
                        data.channels &&
                        Object.values(data.channels).includes(dataa.id)
                    )
                    .map((data, index) => (
                      <div
                        key={index}
                        onClick={() => console.log(data.members)}
                        className="flex flex-col relative border-b group border-white/10 p-6"
                      >
                        <div className="flex flex-row gap-1.5">
                          {data.public ? (
                            <FaHashtag className="text-white/40 size-4 my-auto" />
                          ) : (
                            <CgLock className="text-white/40 size-4 my-auto" />
                          )}
                          <span className="text-white/90 font-bold font-lato">
                            {data.name}
                          </span>
                          <span className="text-white/40 group-hover:flex hidden text-sm my-auto">
                            View channel
                          </span>
                        </div>
                        <div className="flex flex-row gap-1.5">
                          {data.members.includes(userData.id) && (
                            <>
                              <div className="flex flex-row gap-1.5">
                                <FaCheck className="text-green-800 text-sm my-auto" />
                                <span className="text-green-800 text-base my-auto leading-none font-bold">
                                  Joined
                                </span>
                              </div>
                              <span className="text-white/40">·</span>
                            </>
                          )}

                          <div className="flex gap-1.5">
                            <span className="text-white/50 text-sm font-medium">
                              {data.members.length} members
                            </span>
                            {data.description && (
                              <span className="text-white/50 text-sm">
                                · {data.description}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="group-hover:flex right-6 absolute flex-row gap-2 hidden text-white">
                          <Link
                            to={`/workspace/${data.id}`}
                            className="bg-black p-2 text-sm border border-white/50 rounded-md"
                          >
                            Open in Home
                          </Link>
                          <Button
                            onClick={() =>
                              joinChannel({
                                id: data.id,
                                created_by: {
                                  date: data.created_by.date,
                                  owner: data.created_by.owner,
                                },
                                description: data.description,
                                members: data.members,
                                name: data.name,
                                public: data.public,
                              })
                            }
                            className="bg-black p-2 border text-sm border-white/50 rounded-md"
                          >
                            {data.members.includes(userData.id)
                              ? "Joined"
                              : "Join"}
                          </Button>
                        </div>
                      </div>
                    ))}
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
