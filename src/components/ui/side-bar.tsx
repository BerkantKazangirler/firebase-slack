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
import { useLayoutContext } from "@/contexts";

export const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { collapse } = useLayoutContext();

  return (
    <div className="h-full flex flex-row w-1/6 rounded-md bg-sidebar_bg">
      <div
        className={classNames(
          "px-3 py-4 transition-all items-center flex flex-col gap-4 border-r-2 border-r-white border-opacity-10",
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
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row p-4 border-b-2 border-white border-opacity-10 justify-between w-full">
          <div className="flex flex-row gap-1">
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
