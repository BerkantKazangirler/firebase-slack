import {
  useLayoutContext,
  useUsersContext,
  useWorkspaceContext,
} from "@/contexts";
import classNames from "classnames";
import { useState } from "react";
import { monthNames } from "@/types/workspace";
import { FaCaretDown, FaCaretRight, FaHashtag } from "react-icons/fa";
import { CgLock, CgHeadset } from "react-icons/cg";
import { TbEdit, TbMessage2 } from "react-icons/tb";
import { LuSendHorizontal } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components";
import Avatar from "react-avatar";
import { GoPlus } from "react-icons/go";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export const SidebarWorkspace = () => {
  const [channelListShow, setChannelListShow] = useState<boolean>(true);
  const [messageListShow, setMessageListShow] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<string | null>("");
  const { activeWorkspace } = useLayoutContext();

  const { channelDatas, workspaces } = useWorkspaceContext();
  const { userList, userData } = useUsersContext();

  const tarih = new Date();
  const ay = tarih.getMonth();
  const gün = tarih.getUTCDate();

  const takvim = monthNames[ay] + " " + gün;

  return (
    <div className="flex flex-col w-full h-full bg-sidebar_bg">
      <TooltipProvider>
        {workspaces
          .filter((data) => data.id == activeWorkspace)
          ?.map((data, index) => (
            <div key={index} className="flex flex-col w-full">
              <div className="flex flex-row p-4 justify-between w-full">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="flex outline-none flex-row px-1 rounded-md hover:bg-workspace_name_bg gap-1">
                      <span className="text-white leading-none my-auto font-lato font-semibold text-lg">
                        {data.title}
                      </span>

                      <FaCaretDown className="text-white my-auto" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 font-lato border border-white/20">
                    <div className="flex flex-row">
                      <div className="size-11 text-white font-lato flex transition-all justify-center font-bold rounded-xl">
                        <Avatar
                          title
                          name={data.title}
                          src={data.photo}
                          size="32"
                          className="rounded-md my-auto bg-workspace_bg"
                        />
                      </div>
                      <div className="flex flex-col my-auto">
                        <span className="text-white text-sm font-bold opacity-60">
                          {data.title}
                        </span>
                        <span className="text-white text-xs opacity-60">
                          {data.url}
                        </span>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    {data.premium ? (
                      <DropdownMenuItem className="flex group flex-col">
                        <div className="flex flex-row gap-1">
                          <IoRocketOutline />
                          <span className="leading-none text-center my-auto">
                            Your <b>Pro</b> last through {takvim}
                          </span>
                        </div>
                        <a className="text-blue-500 group-hover:underline leading-none font-bold text-xs">
                          See upgrade options
                        </a>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem className="flex flex-col">
                        <div className="flex flex-row gap-3">
                          <IoRocketOutline />
                          <span className="leading-none text-center my-auto">
                            Upgrade
                          </span>
                        </div>
                        <span className="opacity-70 text-xs">
                          You're on the <b>free version</b> of Slack
                        </span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    {!data.premium && (
                      <>
                        <DropdownMenuItem>
                          On the free version of Slack, messages and files older
                          than 90 days will be hidden. To access your history,
                          upgrade now.
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                      </>
                    )}
                    <DropdownMenuItem>
                      Invite people to {data.title}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Preferences</DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Filter sidebar
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="w-60">
                          <DropdownMenuItem>
                            Customize workspace
                          </DropdownMenuItem>
                          <DropdownMenuItem>Workflow Builder</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Tools & settings
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="w-60">
                          <DropdownMenuLabel className="text-xs">
                            Tools
                          </DropdownMenuLabel>
                          <DropdownMenuItem>
                            Customize workspace
                          </DropdownMenuItem>
                          <DropdownMenuItem>Workflow Builder</DropdownMenuItem>
                          <DropdownMenuItem>
                            Workspace analytics
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel className="text-xs">
                            Administrator
                          </DropdownMenuLabel>
                          <DropdownMenuItem>Manage apps</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem disabled>
                      <div className="flex flex-col">
                        Leave channels{" "}
                        <p className="text-xs">
                          Looking fresh! No new recommendation
                        </p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Sign in on mobile</DropdownMenuItem>
                    <DropdownMenuItem>Sign out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
                          <Button
                            key={index}
                            data-page-name={data.id}
                            onClick={(e) =>
                              setActivePage(
                                e.currentTarget.getAttribute("data-page-name")
                              )
                            }
                            className={classNames(
                              "flex flex-row gap-3 px-1 hover:bg-white/10 h-7 items-center transition-all rounded-sm",
                              {
                                "bg-active_channel_bg": activePage == data.id,
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
                            <Button>Create a new channel</Button>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Button>Browse channels</Button>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </>
                  ) : (
                    <>
                      {channelDatas
                        .filter((data) => data.id == activePage)
                        .map((data, index) => (
                          <Button
                            key={index}
                            data-page-name={data.id}
                            onClick={(e) =>
                              setActivePage(
                                e.currentTarget.getAttribute("data-page-name")
                              )
                            }
                            className={classNames(
                              "flex flex-row gap-3 px-1 hover:bg-white/10 h-7 items-center transition-all rounded-sm",
                              {
                                "bg-active_channel_bg": activePage == data.id,
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
                        {userList
                          .filter((data) => data.id == activePage)
                          .map((data, index) => (
                            <div
                              key={index}
                              data-page-name={data.id}
                              onClick={(e) =>
                                setActivePage(
                                  e.currentTarget.getAttribute("data-page-name")
                                )
                              }
                              className={classNames(
                                "flex cursor-pointer flex-row gap-2 px-4 hover:bg-white/10 h-7 items-center transition-all rounded-sm",
                                {
                                  "bg-active_channel_bg": activePage == data.id,
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
                    ) : (
                      <>
                        {userList
                          .filter((data) => data.id !== userData?.id)
                          .map((data, index) => (
                            <div
                              key={index}
                              data-page-name={data.id}
                              onClick={(e) =>
                                setActivePage(
                                  e.currentTarget.getAttribute("data-page-name")
                                )
                              }
                              className={classNames(
                                "flex cursor-pointer flex-row gap-2 px-4 hover:bg-white/10 h-7 items-center transition-all rounded-sm",
                                {
                                  "bg-active_channel_bg": activePage == data.id,
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
                        <div
                          key={index}
                          data-page-name={userData?.id}
                          onClick={(e) =>
                            setActivePage(
                              e.currentTarget.getAttribute("data-page-name")
                            )
                          }
                          className={classNames(
                            "flex cursor-pointer flex-row gap-2 px-4 hover:bg-white/10 h-7 items-center transition-all rounded-sm",
                            {
                              "bg-active_channel_bg":
                                activePage == userData?.id,
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
