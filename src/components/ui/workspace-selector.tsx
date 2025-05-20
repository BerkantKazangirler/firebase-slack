import {
  useLayoutContext,
  useUsersContext,
  useWorkspaceContext,
} from "@/contexts";
import classNames from "classnames";
import { useState } from "react";
import { FaCaretDown, FaCaretRight, FaHashtag } from "react-icons/fa";
import { CgLock, CgHeadset } from "react-icons/cg";
import { TbEdit, TbMessage2 } from "react-icons/tb";
import { LuSendHorizontal } from "react-icons/lu";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components";
import { GoPlus } from "react-icons/go";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Link } from "react-router-dom";
import { CreateChannel, WorkspaceDropdown } from "@/pages";

export const WorkspaceSelector = () => {
  const [channelListShow, setChannelListShow] = useState<boolean>(true);
  const [messageListShow, setMessageListShow] = useState<boolean>(true);
  const { activeWorkspace, collapse, setActiveChannelId, activeChannelId } =
    useLayoutContext();

  const { channelDatas, workspaces } = useWorkspaceContext();
  const { userList, userData } = useUsersContext();

  return (
    <div
      className={classNames(
        "flex flex-col w-full max-w-[16%] border border-blue-200/20 h-full bg-sidebar_bg",
        {
          "rounded-l-md": !collapse,
        }
      )}
    >
      <TooltipProvider>
        {workspaces
          .filter((data) => data.id == activeWorkspace)
          ?.map((data, index) => (
            <div key={index} className="flex flex-col w-full">
              <div className="flex flex-row p-4 justify-between w-full">
                <WorkspaceDropdown data={data} />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="rounded-md transition-all hover:bg-workspace_name_bg text-white opacity-70 p-1">
                      <TbEdit className="size-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-tooltip_bg gap-1 flex flex-col text-white rounded-md font-lato font-bold">
                    <p>New message</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col px-2 gap-1">
                  <Button className="flex hover:bg-white/20 px-4 h-7 p-0.5 rounded-sm flex-row gap-1.5 text-white opacity-60 text-sm">
                    <TbMessage2 className="size-5 my-auto" />
                    <span className="my-auto">Threads</span>
                  </Button>
                  <Button className="flex hover:bg-white/20 px-4 h-7 p-0.5 rounded-sm flex-row gap-1.5 text-white opacity-60 text-sm">
                    <CgHeadset className="size-5 my-auto" />
                    <span className="my-auto">Huddles</span>
                  </Button>
                  <Button className="flex hover:bg-white/20 px-4 h-7 p-0.5 rounded-sm flex-row gap-1.5 text-white opacity-60 text-sm">
                    <LuSendHorizontal className="size-5 my-auto" />
                    <span className="my-auto">Draft & sent</span>
                  </Button>
                </div>
                <div className="flex flex-col gap-1 px-4">
                  <div className="group flex gap-3 flex-row">
                    <Button
                      onClick={() => setChannelListShow((t) => !t)}
                      className="rounded-md hover:bg-white/10 p-1 transition-all"
                    >
                      {channelListShow ? (
                        <FaCaretDown className="text-white/40 size-4" />
                      ) : (
                        <FaCaretRight className="text-white/40 size-4" />
                      )}
                    </Button>
                    <Button className="flex flex-row gap-0.5 my-auto">
                      <span className="text-white/50 text-sm">Channels</span>
                      <FaCaretDown className="text-white group-hover:opacity-50 opacity-0 transition-all size-5" />
                    </Button>
                  </div>

                  {channelListShow ? (
                    <>
                      {channelDatas
                        .filter(
                          (dataa) =>
                            data.channels &&
                            Object.values(data.channels).includes(dataa.id) &&
                            dataa.members.includes(userData.id)
                        )
                        .map((data, index) => (
                          <Link
                            to={`/workspace/${data.id}`}
                            key={index}
                            data-page-name={data.id}
                            onClick={(e) =>
                              setActiveChannelId(
                                e.currentTarget.getAttribute("data-page-name")
                              )
                            }
                            className={classNames(
                              "flex flex-row gap-3 px-1 hover:bg-white/10 h-7 items-center transition-all rounded-sm",
                              {
                                "bg-active_channel_bg":
                                  activeChannelId == data.id,
                              }
                            )}
                          >
                            {data.public ? (
                              <FaHashtag className="text-white/40 size-4" />
                            ) : (
                              <CgLock className="text-white/40 size-4" />
                            )}
                            <span className="text-white/50 font-medium font-lato text-sm">
                              {data.name}
                            </span>
                          </Link>
                        ))}

                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button className="flex flex-row hover:bg-white/10 rounded-sm p-1 gap-2">
                              <div className="bg-[#0f1530] rounded-sm p-0.5">
                                <GoPlus className="text-white" />
                              </div>
                              <span className="text-white/40 w-full flex justify-start font-lato text-sm">
                                Add channels
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-48 py-2 font-lato border border-white/20">
                            <DropdownMenuItem>
                              <DialogTrigger>
                                Create a new channel
                              </DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link to="/workspace/channels">
                                Browse channels
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <DialogContent className="p-0 max-w-[1000px] border-white/30">
                          <CreateChannel />
                        </DialogContent>
                      </Dialog>
                    </>
                  ) : (
                    <>
                      {channelDatas
                        .filter((data) => data.id == activeChannelId)
                        .map((data, index) => (
                          <Button
                            key={index}
                            data-page-name={data.id}
                            onClick={(e) =>
                              setActiveChannelId(
                                e.currentTarget.getAttribute("data-page-name")
                              )
                            }
                            className={classNames(
                              "flex flex-row gap-3 px-1 hover:bg-white/10 h-7 items-center transition-all rounded-sm",
                              {
                                "bg-active_channel_bg":
                                  activeChannelId == data.id,
                              }
                            )}
                          >
                            {data.public ? (
                              <FaHashtag className="text-white/40 size-4" />
                            ) : (
                              <CgLock className="text-white/40 size-4" />
                            )}
                            <span className="text-white/50 font-medium font-lato text-sm">
                              {data.name}
                            </span>
                          </Button>
                        ))}
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <div className="group w-full justify-between flex gap-3 px-4 flex-row">
                    <div className="flex flex-row gap-2">
                      <Button
                        onClick={() => setMessageListShow((t) => !t)}
                        className="rounded-md hover:bg-white/10 p-1 transition-all"
                      >
                        {messageListShow ? (
                          <FaCaretDown className="text-white/40 size-4" />
                        ) : (
                          <FaCaretRight className="text-white/40 size-4" />
                        )}
                      </Button>
                      <Button className="flex flex-row gap-0.5 my-auto">
                        <span className="text-white/50 text-sm">
                          Direct messages
                        </span>
                        <FaCaretDown className="text-white group-hover:opacity-50 opacity-0 transition-all size-5" />
                      </Button>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="hidden group-hover:bg-white/5 px-0.5 rounded-md group-hover:flex">
                          <GoPlus className="text-white/40 size-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-tooltip_bg gap-1 flex flex-col text-white rounded-md font-lato font-bold">
                        <p>Opan a direct message</p>
                        <div className="flex flex-row mx-auto gap-1">
                          <span className="bg-black rounded-sm leading-none p-1">
                            Ctrl
                          </span>
                          <span className="bg-black rounded-sm leading-none p-1">
                            N
                          </span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex flex-col px-2 gap-1">
                    {messageListShow ? (
                      <>
                        {/*  user direct messages */}
                        {userList
                          .filter((data) => data.id !== userData?.id)
                          .map((data, index) => (
                            <Link
                              to={`/workspace/message/${data.id}`}
                              key={index}
                              data-page-name={data.id}
                              onClick={(e) =>
                                setActiveChannelId(
                                  e.currentTarget.getAttribute("data-page-name")
                                )
                              }
                              className={classNames(
                                "flex cursor-pointer flex-row gap-2 px-4 hover:bg-white/10 h-7 items-center transition-all rounded-sm",
                                {
                                  "bg-active_channel_bg":
                                    activeChannelId == data.id,
                                }
                              )}
                            >
                              <img
                                src={data.photo}
                                className="size-5 rounded-sm"
                              />
                              <span className="text-white/50 font-medium font-lato text-sm">
                                {data.name}
                              </span>
                            </Link>
                          ))}
                        <div
                          key={index}
                          data-page-name={userData?.id}
                          onClick={(e) =>
                            setActiveChannelId(
                              e.currentTarget.getAttribute("data-page-name")
                            )
                          }
                          className={classNames(
                            "flex cursor-pointer flex-row gap-2 px-4 hover:bg-white/10 h-7 items-center transition-all rounded-sm",
                            {
                              "bg-active_channel_bg":
                                activeChannelId == userData?.id,
                            }
                          )}
                        >
                          <img
                            src={userData?.photo}
                            className="size-5 rounded-sm"
                          />
                          <span className="text-white/50 font-medium font-lato text-sm">
                            {userData?.display_name}
                          </span>
                          <span className="text-white/20 font-medium font-lato text-sm">
                            you
                          </span>
                        </div>
                      </>
                    ) : (
                      // kişisel
                      <>
                        {userList
                          .filter((data) => data.id == activeChannelId)
                          .map((data, index) => (
                            <div
                              key={index}
                              data-page-name={data.id}
                              onClick={(e) =>
                                setActiveChannelId(
                                  e.currentTarget.getAttribute("data-page-name")
                                )
                              }
                              className={classNames(
                                "flex cursor-pointer flex-row gap-2 px-4 hover:bg-white/10 h-7 items-center transition-all rounded-sm",
                                {
                                  "bg-active_channel_bg":
                                    activeChannelId == data.id,
                                }
                              )}
                            >
                              <img
                                src={data.photo}
                                className="size-5 rounded-sm"
                              />
                              <span className="text-white/50 font-medium font-lato text-sm">
                                {data.name}
                              </span>
                            </div>
                          ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </TooltipProvider>
    </div>
  );
};
