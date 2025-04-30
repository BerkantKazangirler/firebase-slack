import classNames from "classnames";
import { useLayoutContext } from "@/contexts";
import { SidebarWorkspace } from "@/components/ui/workspace";
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
  Button,
  TooltipTrigger,
  Tooltip,
  TooltipProvider,
  TooltipContent,
} from "@/components";
import { useState } from "react";
import { HiOutlinePlusSmall } from "react-icons/hi2";

export const Workspace = () => {
  const { collapse } = useLayoutContext();

  const [activeHeader, setActiveHeader] = useState<string>("");

  return (
    <TooltipProvider>
      <div
        className={classNames(
          "flex transition-all pb-1 duration-300 flex-row w-full",
          {
            "-translate-x-[68px]": !collapse,
            "translate-x-0": collapse,
          }
        )}
      >
        <SidebarWorkspace />
        <div className="bg-input_bg border-t border-b border-r rounded-r-md border-blue-200/20 flex w-full flex-col py-4">
          <div className="flex flex-col border-b-[3px] border-white/10 gap-4">
            <div className="flex flex-row px-6 w-full justify-between">
              <Tooltip>
                <TooltipTrigger asChild className="flex flex-row gap-1">
                  <Button className="text-white/90 font-lato transition-all hover:bg-white/5 rounded-md py-0.5 px-2 font-bold text-lg">
                    karabuk-ofis
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-tooltip_bg text-white rounded-md font-lato font-bold">
                  <p>Get channel details</p>
                </TooltipContent>
              </Tooltip>
              <Button className="flex flex-row gap-2">
                <div className="border flex flex-row border-white/20 rounded-md gap-2 my-auto py-0.5 px-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CgHeadset className="size-5 my-auto text-white/70" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-tooltip_bg flex flex-col gap-1 text-white rounded-md font-lato font-bold">
                      <p>Start huddle in karabuk-ofis</p>
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
            <div className="flex flex-row px-7 gap-2">
              <Button
                onClick={() => setActiveHeader("Messages")}
                className={classNames(
                  "text-white gap-2 pb-1 font-lato flex rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
                  {
                    "border-b-2": activeHeader == "Messages",
                  }
                )}
              >
                {activeHeader == "Messages" ? (
                  <RiChat1Fill className="text-white my-auto" />
                ) : (
                  <RiChat1Line className="text-white my-auto" />
                )}
                Messages
              </Button>
              <Button
                onClick={() => setActiveHeader("Files")}
                className={classNames(
                  "text-white gap-2 pb-1 font-lato flex rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
                  {
                    "border-b-2": activeHeader == "Files",
                  }
                )}
              >
                {activeHeader == "Files" ? (
                  <RiFileCopyFill className="text-white my-auto" />
                ) : (
                  <RiFileCopyLine className="text-white my-auto" />
                )}
                Files
              </Button>
              <Button
                onClick={() => setActiveHeader("Untitled")}
                className={classNames(
                  "text-white gap-2 pb-1 font-lato flex rounded-t-md pt-1 hover:bg-white/10 font-bold transition-all duration-75 px-1.5 border-white",
                  {
                    "border-b-2": activeHeader == "Untitled",
                  }
                )}
              >
                <CgFileDocument className="text-white my-auto" />
                Untitled
              </Button>
              <Button className="flex rounded-full bg-white/10 h-fit my-auto hover:rotate-90 transition-all">
                <HiOutlinePlusSmall className="text-white text-xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
