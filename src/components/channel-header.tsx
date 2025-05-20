import { useState } from "react";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { FaHashtag } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CgFileDocument, CgHeadset, CgLock } from "react-icons/cg";
import { IoChevronDown } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  RiChat1Line,
  RiChat1Fill,
  RiFileCopyLine,
  RiFileCopyFill,
} from "react-icons/ri";
import {
  useLayoutContext,
  useUsersContext,
  useWorkspaceContext,
} from "@/contexts";
import { Button, TooltipTrigger, Tooltip, TooltipContent } from "@/components";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Message } from "@/pages/workspace/channel/message";

export const ChannelHeader = () => {
  const { channelDatas } = useWorkspaceContext();
  const { userList } = useUsersContext();
  const { activeChannelId } = useLayoutContext();

  const activeChannelData = channelDatas.find(
    (data) => data.id === activeChannelId
  );

  const [activeHeader, setActiveHeader] = useState<string>("message");
  const [activeChannelTabs, setActiveChannelTabs] = useState<string>("about");

  function channelOwnerData() {
    return userList.find(
      (data) => data.id === activeChannelData?.created_by.owner
    )?.name;
  }

  return (
    <>
      <div className="flex flex-row px-6 w-full justify-between">
        <Dialog>
          <DialogTrigger>
            <Tooltip>
              <TooltipTrigger asChild className="flex flex-row gap-1">
                <div className="flex flex-row">
                  {activeChannelData?.public ? (
                    <FaHashtag className="text-white/40 size-4 my-auto" />
                  ) : (
                    <CgLock className="text-white/40 size-4 my-auto" />
                  )}
                  <Button className="text-white/90 font-lato transition-all hover:bg-white/5 rounded-md py-0.5 px-2 font-bold text-lg">
                    {activeChannelData?.name}
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-tooltip_bg text-white rounded-md font-lato font-bold">
                <p>Get channel details</p>
              </TooltipContent>
            </Tooltip>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex flex-row gap-2">
                {activeChannelData?.public ? (
                  <FaHashtag className="text-white/40 size-4 my-auto" />
                ) : (
                  <CgLock className="text-white/40 size-4 my-auto" />
                )}
                <span className="text-white/80">{activeChannelData?.name}</span>
              </DialogTitle>
              <Tabs defaultValue="about" className="h-96">
                <TabsList className="flex flex-row gap-3">
                  <TabsTrigger
                    value="about"
                    className={classNames(
                      "text-white gap-2 pb-1 font-lato text-sm flex rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
                      {
                        "border-b-2": activeChannelTabs == "about",
                      }
                    )}
                    onClick={() => setActiveChannelTabs("about")}
                  >
                    About
                  </TabsTrigger>
                  <TabsTrigger
                    value="members"
                    className={classNames(
                      "text-white gap-2 pb-1 font-lato flex text-sm rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
                      {
                        "border-b-2": activeChannelTabs == "members",
                      }
                    )}
                    onClick={() => setActiveChannelTabs("members")}
                  >
                    Members
                  </TabsTrigger>
                  <TabsTrigger
                    value="tabs"
                    className={classNames(
                      "text-white gap-2 pb-1 font-lato flex text-sm rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
                      {
                        "border-b-2": activeChannelTabs == "tabs",
                      }
                    )}
                    onClick={() => setActiveChannelTabs("tabs")}
                  >
                    Tabs
                  </TabsTrigger>
                  <TabsTrigger
                    value="integrations"
                    className={classNames(
                      "text-white gap-2 pb-1 font-lato flex text-sm rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
                      {
                        "border-b-2": activeChannelTabs == "integrations",
                      }
                    )}
                    onClick={() => setActiveChannelTabs("integrations")}
                  >
                    Integrations
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className={classNames(
                      "text-white gap-2 pb-1 font-lato flex text-sm rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
                      {
                        "border-b-2": activeChannelTabs == "settings",
                      }
                    )}
                    onClick={() => setActiveChannelTabs("settings")}
                  >
                    Settings
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="py-5">
                  <div className="flex flex-col border border-white/20 rounded-xl">
                    <Button className="flex flex-row justify-between border-b px-4 border-white/20 py-4 w-full">
                      <div className="flex flex-col">
                        <span className="text-white w-fit text-sm leading-none font-medium">
                          Topic
                        </span>
                        <span className="text-white/50 text-xs">
                          Add a topic
                        </span>
                      </div>
                      <span className="font-medium text-xs text-blue-400">
                        Edit
                      </span>
                    </Button>
                    <Button className="flex flex-row justify-between border-b px-4 border-white/20 py-4 w-full">
                      <div className="flex flex-col">
                        <span className="text-white w-fit text-sm leading-none font-medium">
                          Description
                        </span>
                        <span className="text-white/50 text-xs">
                          Add a description
                        </span>
                      </div>
                      <span className="font-medium text-xs text-blue-400">
                        Edit
                      </span>
                    </Button>
                    <Button className="flex flex-row justify-between border-b px-4 border-white/20 py-4 w-full">
                      <div className="flex flex-col">
                        <span className="text-white w-fit text-sm leading-none font-medium">
                          Created by
                        </span>
                        <span className="text-white/50 text-xs">
                          {channelOwnerData()} on{" "}
                          {activeChannelData?.created_by.date}
                        </span>
                      </div>
                      <span className="font-medium text-xs text-blue-400">
                        Edit
                      </span>
                    </Button>
                    <div className="flex px-4 py-4 w-full">
                      <Button className="font-semibold text-xs text-red-400">
                        Leave channel
                      </Button>
                    </div>
                  </div>
                  <span className="text-white/50 text-xs p-2">
                    Channel ID: {activeChannelData?.id}
                  </span>
                </TabsContent>
                <TabsContent value="members">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Button className="flex flex-row gap-2">
          <div className="border flex flex-row border-white/20 rounded-md gap-2 my-auto py-0.5 px-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <CgHeadset className="size-5 my-auto text-white/70" />
              </TooltipTrigger>
              <TooltipContent className="bg-tooltip_bg flex flex-col gap-1 text-white rounded-md font-lato font-bold">
                <p>Start huddle in {activeChannelData?.name}</p>
                <div className="flex flex-row mx-auto gap-1">
                  <span className="bg-black rounded-sm leading-none p-1">
                    Ctrl
                  </span>
                  <span className="bg-black rounded-sm leading-none p-1">
                    Shift
                  </span>
                  <span className="bg-black rounded-sm leading-none p-1">
                    H
                  </span>
                </div>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="border-l-2 border-white/20 pl-1">
                  <IoChevronDown className="text-white/70 my-auto h-full" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-tooltip_bg text-white rounded-md font-lato font-bold">
                <p>More options</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <HiOutlineDotsVertical className="text-white/70 my-auto text-xl" />
            </TooltipTrigger>
            <TooltipContent className="bg-tooltip_bg text-white rounded-md font-lato font-bold">
              <p>More actions</p>
            </TooltipContent>
          </Tooltip>
        </Button>
      </div>

      <div className="flex flex-row border-b-[3px] border-white/10 px-7 gap-2">
        <Link
          to={`/workspace/${activeChannelId}/message`}
          className={classNames(
            "text-white gap-2 pb-1 font-lato flex rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
            {
              "border-b-2": activeHeader == "message",
            }
          )}
          onClick={() => setActiveHeader("message")}
        >
          {activeHeader == "message" ? (
            <RiChat1Fill className="text-white my-auto" />
          ) : (
            <RiChat1Line className="text-white my-auto" />
          )}
          Messages
        </Link>
        <Link
          to={`/workspace/${activeChannelId}/files`}
          className={classNames(
            "text-white gap-2 pb-1 font-lato flex rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
            {
              "border-b-2": activeHeader == "files",
            }
          )}
          onClick={() => setActiveHeader("files")}
        >
          {activeHeader == "files" ? (
            <RiFileCopyFill className="text-white my-auto" />
          ) : (
            <RiFileCopyLine className="text-white my-auto" />
          )}
          Files
        </Link>
        <Link
          to={`/workspace/${activeChannelId}/untitled`}
          className={classNames(
            "text-white gap-2 pb-1 font-lato flex rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
            {
              "border-b-2": activeHeader == "untitled",
            }
          )}
          onClick={() => setActiveHeader("untitled")}
        >
          <CgFileDocument className="text-white my-auto" />
          Untitled
        </Link>
        <Button className="flex rounded-full bg-white/10 h-fit my-auto hover:rotate-90 transition-all">
          <HiOutlinePlusSmall className="text-white text-xl" />
        </Button>
      </div>
      <Message />
    </>
  );
};
