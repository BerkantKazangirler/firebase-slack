import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components";
import Avatar from "react-avatar";
import { GoHome, GoHomeFill, GoPlus } from "react-icons/go";
import { TbDots, TbTools } from "react-icons/tb";
import { IoChatbubblesOutline, IoChatbubblesSharp } from "react-icons/io5";
import { PiAddressBookBold, PiAddressBookFill } from "react-icons/pi";
import { BiBell, BiSolidBell } from "react-icons/bi";
import classNames from "classnames";
import {
  useLayoutContext,
  useUsersContext,
  useWorkspaceContext,
} from "@/contexts";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const { collapse, activeWorkspace } = useLayoutContext();
  const { workspaces } = useWorkspaceContext();
  const { userData } = useUsersContext();

  const activeWorkspaceDatas = workspaces.find(
    (data) => data.id === activeWorkspace
  );

  const location = useLocation();

  return (
    <TooltipProvider>
      <div
        className={classNames(
          "h-full w-full flex flex-row rounded-l-md bg-sidebar_bg",
          {
            "rounded-r-md": !collapse,
          }
        )}
      >
        <div
          className={classNames(
            "px-3 py-4 transition-all h-full items-center flex flex-col gap-4",
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
            <Avatar
              title
              name={activeWorkspaceDatas?.title}
              size="40"
              src={activeWorkspaceDatas?.photo}
              className="shadow-md shadow-white/40 bg-workspace_bg rounded-md text-lg items-center my-auto justify-center flex"
            />
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
            <Link
              to={"/workspace/"}
              className="flex w-fit flex-col mx-auto gap-0.5 group"
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg": location.pathname == "/workspace/",
                  }
                )}
              >
                {location.pathname == "/workspace/" ? (
                  <GoHomeFill className="group-hover:scale-125 size-5 leading-none w-fit text-white transition-all" />
                ) : (
                  <GoHome className="group-hover:scale-125 size-5 text-white transition-all" />
                )}
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                Home
              </p>
            </Link>
            <Link
              to={"/workspace/messages"}
              className="flex w-fit flex-col gap-0.5 group"
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg":
                      location.pathname == "/workspace/messages",
                  }
                )}
              >
                {location.pathname == "/workspace/messages" ? (
                  <IoChatbubblesSharp className="group-hover:scale-125 size-5 leading-none w-fit text-white transition-all" />
                ) : (
                  <IoChatbubblesOutline className="group-hover:scale-125 size-5 text-white transition-all" />
                )}
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                DMs
              </p>
            </Link>
            <Link
              to={"/workspace/activity"}
              className="flex w-fit justify-center flex-col gap-0.5 group"
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg":
                      location.pathname == "/workspace/activity",
                  }
                )}
              >
                {location.pathname == "/workspace/activity" ? (
                  <BiSolidBell className="group-hover:scale-125 size-5 leading-none w-fit text-white transition-all" />
                ) : (
                  <BiBell className="group-hover:scale-125 size-5 text-white transition-all" />
                )}
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                Activity
              </p>
            </Link>
            <Link
              to={"/workspace/templates"}
              className="flex w-fit flex-col gap-0.5 group items-center"
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg":
                      location.pathname == "/workspace/templates",
                  }
                )}
              >
                {location.pathname == "/workspace/templates" ? (
                  <TbTools className="group-hover:scale-125 size-5 fill-white leading-none w-fit transition-all" />
                ) : (
                  <TbTools className="group-hover:scale-125 size-5 text-white transition-all" />
                )}
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                Templates
              </p>
            </Link>
            <Link
              to={"/workspace/people"}
              className="flex w-fit flex-col gap-0.5 group items-center"
            >
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg":
                      location.pathname == "/workspace/people",
                  }
                )}
              >
                {location.pathname == "/workspace/people" ? (
                  <PiAddressBookFill className="group-hover:scale-125 size-4 leading-none w-fit text-white transition-all" />
                ) : (
                  <PiAddressBookBold className="group-hover:scale-125 size-4 text-white transition-all" />
                )}
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                People
              </p>
            </Link>
            <Button className="flex w-fit flex-col gap-0.5 group items-center">
              <div
                className={classNames(
                  "size-8 flex justify-center mx-auto transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
                  {
                    "bg-active_menu_bg":
                      location.pathname == "/workspace/channels" ||
                      location.pathname == "/workspace/automations" ||
                      location.pathname == "/workspace/canvases" ||
                      location.pathname == "/workspace/econnections" ||
                      location.pathname == "/workspace/files",
                  }
                )}
              >
                <TbDots className="group-hover:scale-125 size-5 leading-none w-fit text-white transition-all" />
              </div>
              <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
                More
              </p>
            </Button>
          </div>

          <div className="flex justify-end h-full gap-4 flex-col">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-active_menu_bg/70 rounded-full w-fit mx-auto p-1 group">
                  <GoPlus className="text-white size-5 opacity-70 group-hover:scale-125 transition-all" />
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
                <p>
                  {userData?.display_name}{" "}
                  {(userData?.status == "ONLINE" && "🟢") ||
                    (userData?.status == "OFFLINE" && "⚪") ||
                    (userData?.status == "AWAY" && "🟡")}
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
