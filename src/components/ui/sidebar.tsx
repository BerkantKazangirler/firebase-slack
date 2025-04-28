import { useEffect, useState } from "react";
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
  TooltipProvider,
  TooltipTrigger,
} from "@/components";
import {
  IconAddressBook,
  IconAddressBookOff,
  IconBell,
  IconBellFilled,
  IconCaretDown,
  IconCaretDownFilled,
  IconCaretRightFilled,
  IconDots,
  IconEdit,
  IconHash,
  IconHeadphones,
  IconHome,
  IconHomeFilled,
  IconLock,
  IconMessageCircle,
  IconMessageCircleFilled,
  IconPlus,
  IconRocket,
  IconSend2,
  IconTools,
  IconToolsOff,
} from "@tabler/icons-react";
import classNames from "classnames";
import { useLayoutContext } from "@/contexts";

export const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>("Home");
  const { collapse } = useLayoutContext();
  const [channelListShow, setChannelListShow] = useState<boolean>(true);
  const [messageListShow, setMessageListShow] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<string | null>("");

  const [channelDatas, setChannelDatas] = useState<
    Array<{
      id: string;
      name: string;
      public: boolean;
    }>
  >([]);

  useEffect(() => {
    setChannelDatas([
      {
        id: "asdd",
        name: "asd",
        public: false,
      },
      {
        id: "asddd",
        name: "asd",
        public: false,
      },
      {
        id: "asd",
        name: "asd",
        public: true,
      },
    ]);
  }, []);

  return (
    <TooltipProvider>
      <div className="h-full flex flex-row w-1/6 rounded-md bg-sidebar_bg">
        <div
          className={classNames(
            "px-3 py-4 transition-all h-full items-center flex flex-col gap-4 border-r-2 border-r-white border-opacity-10",
            {
              "bg-primary": !collapse,
            }
          )}
        >
          <Button
            className={classNames(
              "size-11 text-white font-lato flex transition-all duration-300 justify-center font-bold rounded-xl",
              {
                "opacity-0": collapse,
                "opacity-100": !collapse,
              }
            )}
          >
            <span className="size-9 shadow-md shadow-white/40 bg-workspace_bg rounded-md text-lg items-center my-auto justify-center flex">
              A
            </span>
          </Button>

          <div
            className={classNames(
              "flex flex-col items-center transition-all duration-300 gap-4 justify-start",
              {
                "translate-y-0": !collapse,
                "-translate-y-14": collapse,
              }
            )}
          >
            <Button
              className="flex w-fit flex-col mx-auto gap-0.5 group"
              onClick={() => setActiveMenu("Home")}
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg": activeMenu == "Home",
                  }
                )}
              >
                {activeMenu == "Home" ? (
                  <IconHomeFilled className="group-hover:scale-125 size-5 leading-none w-fit text-white transition-all" />
                ) : (
                  <IconHome
                    stroke={2}
                    className="group-hover:scale-125 size-5 text-white transition-all"
                  />
                )}
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                Home
              </p>
            </Button>
            <Button
              className="flex w-fit flex-col gap-0.5 group"
              onClick={() => setActiveMenu("Message")}
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg": activeMenu == "Message",
                  }
                )}
              >
                {activeMenu == "Message" ? (
                  <IconMessageCircleFilled className="group-hover:scale-125 size-5 leading-none w-fit text-white transition-all" />
                ) : (
                  <IconMessageCircle
                    stroke={2}
                    className="group-hover:scale-125 size-5 text-white transition-all"
                  />
                )}
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                DMs
              </p>
            </Button>
            <Button
              className="flex w-fit justify-center flex-col gap-0.5 group"
              onClick={() => setActiveMenu("Activity")}
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg": activeMenu == "Activity",
                  }
                )}
              >
                {activeMenu == "Activity" ? (
                  <IconBellFilled className="group-hover:scale-125 size-5 leading-none w-fit text-white transition-all" />
                ) : (
                  <IconBell
                    stroke={2}
                    className="group-hover:scale-125 size-5 text-white transition-all"
                  />
                )}
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                Activity
              </p>
            </Button>
            <Button
              className="flex w-fit flex-col gap-0.5 group items-center"
              onClick={() => setActiveMenu("Templates")}
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg": activeMenu == "Templates",
                  }
                )}
              >
                {activeMenu == "Templates" ? (
                  <IconToolsOff className="group-hover:scale-125 size-5 leading-none w-fit text-white transition-all" />
                ) : (
                  <IconTools
                    stroke={2}
                    className="group-hover:scale-125 size-5 text-white transition-all"
                  />
                )}
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                Templates
              </p>
            </Button>
            <Button
              className="flex w-fit flex-col gap-0.5 group items-center"
              onClick={() => setActiveMenu("People")}
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg": activeMenu == "People",
                  }
                )}
              >
                {activeMenu == "People" ? (
                  <IconAddressBookOff className="group-hover:scale-125 size-5 leading-none w-fit text-white transition-all" />
                ) : (
                  <IconAddressBook
                    stroke={2}
                    className="group-hover:scale-125 size-5 text-white transition-all"
                  />
                )}
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                People
              </p>
            </Button>
            <Button
              className="flex w-fit flex-col gap-0.5 group items-center"
              onClick={() => setActiveMenu("More")}
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg": activeMenu == "More",
                  }
                )}
              >
                <IconDots className="group-hover:scale-125 size-5 leading-none w-fit text-white transition-all" />
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                People
              </p>
            </Button>
          </div>

          <div className="flex justify-end h-full gap-4 flex-col">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-active_menu_bg rounded-full p-1 group">
                  <IconPlus
                    stroke={2}
                    className="text-white opacity-60 group-hover:scale-125 transition-all"
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-tooltip_bg gap-1 flex flex-col text-white rounded-md font-lato font-bold">
                <p>Create New</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  src="https://ca.slack-edge.com/T04DR8P7QSX-U07BQHBHAV6-2f2435a96a1a-512"
                  className="size-8 rounded-md"
                />
              </TooltipTrigger>
              <TooltipContent className="bg-tooltip_bg gap-1 flex flex-col text-white rounded-md font-lato font-bold">
                <p>Berkant 🟢</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row p-4 justify-between w-full">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  onClick={() => console.log("s")}
                  className="flex outline-none flex-row px-1 rounded-md hover:bg-workspace_name_bg gap-1"
                >
                  <span className="text-white leading-none my-auto font-lato font-semibold text-lg">
                    InnoVentures
                  </span>

                  <IconCaretDownFilled className="text-white my-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 font-lato border border-white/20">
                <div className="flex flex-row">
                  <div className="size-11 text-white font-lato flex transition-all justify-center font-bold rounded-xl">
                    <span className="size-8 bg-workspace_bg rounded-md text-lg items-center my-auto justify-center flex">
                      A
                    </span>
                  </div>
                  <div className="flex flex-col my-auto">
                    <span className="text-white text-sm font-bold opacity-60">
                      InnoVentures
                    </span>
                    <span className="text-white text-xs opacity-60">
                      innoventures-tech.slack.com
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex flex-col">
                  <div className="flex flex-row gap-3">
                    <IconRocket stroke={1} />
                    <span className="leading-none text-center my-auto">
                      Upgrade
                    </span>
                  </div>
                  <span className="opacity-70 text-xs">
                    You're on the <b>free version</b> of Slack
                  </span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  On the free version of Slack, messages and files older than 90
                  days will be hidden. To access your history, upgrade now.
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Invite people to InnoVentures
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Preferences</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    Filter sidebar
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="w-60">
                      <DropdownMenuItem>Customize workspace</DropdownMenuItem>
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
                      <DropdownMenuItem>Customize workspace</DropdownMenuItem>
                      <DropdownMenuItem>Workflow Builder</DropdownMenuItem>
                      <DropdownMenuItem>Workspace analytics</DropdownMenuItem>
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
                  <IconEdit stroke={2} className="size-5" />
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
                <IconMessageCircle stroke={2} className="size-5 my-auto" />
                <span className="my-auto">Threads</span>
              </Button>
              <Button className="flex hover:bg-white/20 px-4 h-7 p-0.5 rounded-sm flex-row gap-1.5 text-white opacity-60 text-sm">
                <IconHeadphones stroke={2} className="size-5 my-auto" />
                <span className="my-auto">Huddles</span>
              </Button>
              <Button className="flex hover:bg-white/20 px-4 h-7 p-0.5 rounded-sm flex-row gap-1.5 text-white opacity-60 text-sm">
                <IconSend2 stroke={2} className="size-5 my-auto" />
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
                    <IconCaretDownFilled className="text-white/40 size-4" />
                  ) : (
                    <IconCaretRightFilled className="text-white/40 size-4" />
                  )}
                </Button>
                <Button className="flex flex-row gap-0.5 my-auto">
                  <span className="text-white/50 text-sm">Channels</span>
                  <IconCaretDown
                    stroke={1}
                    className="text-white group-hover:opacity-50 opacity-0 transition-all size-5"
                  />
                </Button>
              </div>
              {channelListShow &&
                channelDatas.map((data, index) => (
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
                      <IconHash stroke={2} className="text-white/40 size-4" />
                    ) : (
                      <IconLock stroke={2} className="text-white/40 size-4" />
                    )}
                    <span className="text-white/50 font-medium font-lato text-sm">
                      {data.name}
                    </span>
                  </Button>
                ))}
            </div>

            <div className="flex flex-col gap-1">
              <div className="group w-full justify-between flex gap-3 px-4 flex-row">
                <div className="flex flex-row gap-2">
                  <Button
                    onClick={() => setMessageListShow((t) => !t)}
                    className="rounded-md hover:bg-white/10 p-1 transition-all"
                  >
                    {messageListShow ? (
                      <IconCaretDownFilled className="text-white/40 size-4" />
                    ) : (
                      <IconCaretRightFilled className="text-white/40 size-4" />
                    )}
                  </Button>
                  <Button className="flex flex-row gap-0.5 my-auto">
                    <span className="text-white/50 text-sm">
                      Direct messages
                    </span>
                    <IconCaretDown
                      stroke={1}
                      className="text-white group-hover:opacity-50 opacity-0 transition-all size-5"
                    />
                  </Button>
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="hidden group-hover:bg-white/5 px-0.5 rounded-md group-hover:flex">
                      <IconPlus stroke={2} className="text-white/40 size-5" />
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
                <div className="flex cursor-pointer flex-row gap-2 px-4 hover:bg-white/10 h-7 items-center transition-all rounded-sm">
                  <img
                    src="https://ca.slack-edge.com/T04DR8P7QSX-U07BQHBHAV6-2f2435a96a1a-512"
                    className="size-5 rounded-sm"
                  />
                  <span className="text-white/50 font-medium font-lato text-sm">
                    Berkant Kazangirler
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
