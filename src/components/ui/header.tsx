import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconClockHour2,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
  IconMenu2,
  IconProgressHelp,
} from "@tabler/icons-react";
import { Input } from "./input";
import { Button } from "./button";
import { useLayoutContext } from "@/contexts";

export const Header = () => {
  const { setCollapse, collapse } = useLayoutContext();

  console.log(collapse);

  return (
    <div className="w-full flex flex-row p-2 justify-between">
      <div className="flex flex-row gap-8 px-3">
        <IconMenu2 stroke={2} className="text-white" />
        <Button onClick={() => setCollapse((t) => !t)} className="opacity-80">
          {collapse ? (
            <IconLayoutSidebarLeftExpand stroke={2} className="text-white" />
          ) : (
            <IconLayoutSidebarLeftCollapse stroke={2} className="text-white" />
          )}
        </Button>
      </div>
      <div className="flex flex-row w-[35%] gap-4">
        <Button>
          <IconArrowNarrowLeft stroke={2} className="text-white" />
        </Button>
        <Button>
          <IconArrowNarrowRight stroke={2} className="text-white p-0.5" />
        </Button>
        <Button>
          <IconClockHour2 stroke={2} className="text-white p-0.5" />
        </Button>

        <div className="flex relative w-full">
          <Input
            className="bg-input_bg text-sm w-full text-center opacity-80 placeholder:text-white text-white outline-none rounded-md border border-white border-opacity-20 font-lato"
            placeholder="Search InnoVentures"
          />
        </div>
        <Button>
          <IconProgressHelp stroke={2} className="text-white" />
        </Button>
      </div>
      <div className="flex flex-row relative">
        <div className="bg-profile_flag_bg w-7 flex rounded-l-md">
          <span className="text-base font-lato flex mx-auto">🇰🇷</span>
        </div>
        <div className="bg-gradient-to-t h-full w-7 rounded-r-md from-[#fda36f] to-[#ffc917]"></div>
        <div className="bg-green-500 absolute w-2 h-2 rounded-full bottom-0 right-0"></div>
      </div>
    </div>
  );
};
