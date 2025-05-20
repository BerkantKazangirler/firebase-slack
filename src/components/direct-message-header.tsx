import { useState } from "react";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  Button,
  TooltipTrigger,
  Tooltip,
  TooltipContent,
} from "@/components";
import { CgFileDocument, CgHeadset } from "react-icons/cg";
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
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Message } from "@/pages";
import Avatar from "react-avatar";

export const DirectHeader = () => {
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
            <div className="flex flex-row">
              <Avatar
                title={
                  userList.find((data) => data.id === activeChannelId)?.name
                }
                name={
                  userList.find((data) => data.id === activeChannelId)?.name
                }
                size="32"
                src={
                  userList.find((data) => data.id === activeChannelId)?.photo
                }
                className="shadow-md shadow-white/40 bg-workspace_bg rounded-md text-lg items-center my-auto justify-center flex"
              />
              <Button className="text-white/90 font-lato transition-all hover:bg-white/5 rounded-md py-0.5 px-2 font-bold text-lg">
                {userList.find((data) => data.id === activeChannelId)?.name}
              </Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
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
          to={`/workspace/message/${activeChannelId}`}
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
          to={`/workspace/message/${activeChannelId}/canvas`}
          className={classNames(
            "text-white gap-2 pb-1 font-lato flex rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
            {
              "border-b-2": activeHeader == "canvas",
            }
          )}
          onClick={() => setActiveHeader("canvas")}
        >
          {activeHeader == "canvas" ? (
            <RiFileCopyFill className="text-white my-auto" />
          ) : (
            <RiFileCopyLine className="text-white my-auto" />
          )}
          Add canvas
        </Link>
        <Link
          to={`/workspace/message/${activeChannelId}/files`}
          className={classNames(
            "text-white gap-2 pb-1 font-lato flex rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
            {
              "border-b-2": activeHeader == "files",
            }
          )}
          onClick={() => setActiveHeader("files")}
        >
          <CgFileDocument className="text-white my-auto" />
          Files
        </Link>
        <Button className="flex rounded-full bg-white/10 h-fit my-auto hover:rotate-90 transition-all">
          <HiOutlinePlusSmall className="text-white text-xl" />
        </Button>
      </div>
      <Message />
    </>
  );
};
