import { useState } from "react";
import { Button } from "./button";
import {
  IconAddressBook,
  IconAddressBookOff,
  IconBell,
  IconBellFilled,
  IconCaretDownFilled,
  IconDots,
  IconEdit,
  IconHome,
  IconHomeFilled,
  IconMessageCircle,
  IconMessageCircleFilled,
  IconTools,
  IconToolsOff,
} from "@tabler/icons-react";
import classNames from "classnames";

export const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  return (
    <div className="h-full flex flex-row w-1/6 rounded-md bg-[#0f1844]">
      <div className="px-3 py-4 items-center justify-center flex flex-col gap-4 border-r-2 border-r-white border-opacity-10">
        <Button
          className="flex w-fit flex-col gap-0.5 group"
          onClick={() => setActiveMenu("Home")}
        >
          <div
            className={classNames(
              "size-8 flex justify-center transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
              {
                "bg-active_menu_bg": activeMenu == "Home",
              }
            )}
          >
            {activeMenu == "Home" ? (
              <IconHomeFilled className="group-hover:size-6 size-5 leading-none w-fit text-white transition-all" />
            ) : (
              <IconHome
                stroke={2}
                className="group-hover:size-6 size-5 text-white transition-all"
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
              "size-8 flex justify-center transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
              {
                "bg-active_menu_bg": activeMenu == "Message",
              }
            )}
          >
            {activeMenu == "Message" ? (
              <IconMessageCircleFilled className="group-hover:size-6 size-5 leading-none w-fit text-white transition-all" />
            ) : (
              <IconMessageCircle
                stroke={2}
                className="group-hover:size-6 size-5 text-white transition-all"
              />
            )}
          </div>
          <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
            DMs
          </p>
        </Button>
        <Button
          className="flex w-fit flex-col gap-0.5 group"
          onClick={() => setActiveMenu("Activity")}
        >
          <div
            className={classNames(
              "size-8 flex justify-center transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
              {
                "bg-active_menu_bg": activeMenu == "Activity",
              }
            )}
          >
            {activeMenu == "Activity" ? (
              <IconBellFilled className="group-hover:size-6 size-5 leading-none w-fit text-white transition-all" />
            ) : (
              <IconBell
                stroke={2}
                className="group-hover:size-6 size-5 text-white transition-all"
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
              "size-8 flex justify-center transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
              {
                "bg-active_menu_bg": activeMenu == "Templates",
              }
            )}
          >
            {activeMenu == "Templates" ? (
              <IconToolsOff className="group-hover:size-6 size-5 leading-none w-fit text-white transition-all" />
            ) : (
              <IconTools
                stroke={2}
                className="group-hover:size-6 size-5 text-white transition-all"
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
              "size-8 flex justify-center transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
              {
                "bg-active_menu_bg": activeMenu == "People",
              }
            )}
          >
            {activeMenu == "People" ? (
              <IconAddressBookOff className="group-hover:size-6 size-5 leading-none w-fit text-white transition-all" />
            ) : (
              <IconAddressBook
                stroke={2}
                className="group-hover:size-6 size-5 text-white transition-all"
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
              "size-8 flex justify-center transition-all rounded-md hover:bg-menu_hover_bg items-center my-auto",
              {
                "bg-active_menu_bg": activeMenu == "More",
              }
            )}
          >
            <IconDots className="group-hover:size-6 size-5 leading-none w-fit text-white transition-all" />
          </div>
          <p className="text-white text-[10px] font-lato text-center font-bold cursor-pointer leading-none">
            People
          </p>
        </Button>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row p-4 border-b-2 border-white border-opacity-10 justify-between w-full">
          <div className="flex flex-row gap-3">
            <span className="text-white leading-none my-auto font-lato font-bold text-base">
              DesignersKR
            </span>
            <IconCaretDownFilled className="text-white my-auto" />
          </div>
          <div className="bg-white rounded-full p-1.5">
            <IconEdit stroke={1} />
          </div>
        </div>
      </div>
    </div>
  );
};
