import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";
import { TfiHelpAlt } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Input,
} from "@/components";
import { useLayoutContext } from "@/contexts";

export const Header = () => {
  const { setCollapse, collapse } = useLayoutContext();

  return (
    <TooltipProvider>
      <div className="w-full flex flex-row p-2 justify-between">
        <div className="flex flex-row gap-8 px-3">
          <RxHamburgerMenu className="text-white" />

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => setCollapse((t) => !t)}
                className="opacity-80"
              >
                {collapse ? (
                  <TbLayoutSidebarLeftCollapse className="text-white size-5" />
                ) : (
                  <TbLayoutSidebarLeftCollapseFilled className="text-white size-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-tooltip_bg gap-1 flex flex-col text-white rounded-md font-lato font-bold">
              <p>Show workspace switcher</p>
              <div className="flex flex-row mx-auto gap-1">
                <span className="bg-black rounded-sm leading-none p-1">
                  Ctrl
                </span>
                <span className="bg-black rounded-sm leading-none p-1">
                  Shift
                </span>
                <span className="bg-black rounded-sm leading-none p-1">S</span>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex flex-row w-[35%] gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
                <GoArrowLeft className="text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-tooltip_bg gap-1 flex flex-col text-white rounded-md font-lato font-bold">
              <p>Back in history</p>
              <div className="flex flex-row mx-auto gap-1">
                <span className="bg-black rounded-sm leading-none p-1">
                  Alt
                </span>
                <FaCaretLeft className="bg-black rounded-sm size-5 leading-none" />
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
                <GoArrowRight className="text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-tooltip_bg gap-1 flex flex-col text-white rounded-md font-lato font-bold">
              <p>Forward in history</p>
              <div className="flex flex-row mx-auto gap-1">
                <span className="bg-black rounded-sm leading-none p-1">
                  Alt
                </span>
                <FaCaretRight className="bg-black rounded-sm size-5 leading-none" />
              </div>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild className="cursor-pointer">
              <LuClock3 className="text-white p-0.5 my-auto" />
            </TooltipTrigger>
            <TooltipContent className="bg-tooltip_bg gap-1 flex flex-col text-white rounded-md font-lato font-bold">
              <p>History</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild className="cursor-pointer">
              <Input
                className="bg-input_bg text-sm w-full text-center opacity-80 placeholder:text-white text-white outline-none rounded-md border border-white border-opacity-20 font-lato"
                placeholder="Search InnoVentures"
              />
            </TooltipTrigger>
            <TooltipContent className="bg-tooltip_bg gap-1 flex flex-col text-white rounded-md font-lato font-bold">
              <p>Search InnoVentures</p>
              <div className="flex flex-row mx-auto gap-1">
                <span className="bg-black rounded-sm leading-none p-1">
                  Ctrl
                </span>
                <span className="bg-black rounded-sm leading-none p-1">G</span>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
        <Tooltip>
          <TooltipTrigger asChild className="cursor-pointer">
            <TfiHelpAlt className="text-white" />
          </TooltipTrigger>
          <TooltipContent className="bg-tooltip_bg gap-1 flex flex-col text-white rounded-md font-lato font-bold">
            <p>Help</p>
            <span className="bg-black rounded-sm mx-auto leading-none w-fit p-1">
              F1
            </span>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};
