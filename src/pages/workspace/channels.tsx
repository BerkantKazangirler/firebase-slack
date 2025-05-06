import { Button, Input } from "@/components";
import { useLayoutContext } from "@/contexts";
import classNames from "classnames";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";

export const Channels = () => {
  const { collapse } = useLayoutContext();
  const [inputText, setInputText] = useState<string>("");

  return (
    <div
      className={classNames(
        "flex flex-col py-6 gap-4 rounded-md font-lato bg-workspace_menus_bg transition-all duration-300 w-full",
        {
          "translate-x-0": collapse,
          "-translate-x-[69px]": !collapse,
        }
      )}
    >
      <div className="flex flex-row px-8 justify-between w-full">
        <p className="font-bold text-white text-lg">All channels</p>
        <Button className="bg-black py-2 px-3 rounded-lg border border-white/20 font-bold text-sm text-white">
          Create Channel
        </Button>
      </div>
      <div className="w-full px-8 relative">
        <CiSearch className="absolute text-white/60 z-20 text-xl my-1.5 ml-3" />
        <Button
          onClick={() => setInputText("")}
          className={classNames("text-xs text-white/40 absolute right-3 my-2", {
            flex: inputText !== "",
            hidden: inputText == "",
          })}
        >
          Clear
        </Button>
        <Input
          placeholder="Seach for channels"
          value={inputText}
          onChange={(e) => setInputText(e.currentTarget.value)}
          className="bg-input_bg w-full rounded-md indent-10 text-white/80 placeholder:text-white/50 text-sm py-2 border border-white/20 leading-none"
        />
      </div>
      <div className="w-full gap-2 py-20 px-24 bg-[#001a2d] flex flex-col border-t border-b border-blue-200/10 relative">
        <span className="text-white/80 font-lato text-xl font-bold">
          Organize your team's conversations
        </span>
        <p className="text-white/60 max-w-[545px]">
          Channels are spaces for gathering all the right people, messages,
          files and tools. Organize them by any project, group, initiative or
          topic of your choosing.
        </p>
        <Button className="bg-black/70 w-fit py-2 px-3 rounded-lg border border-white/20 font-bold text-sm text-white">
          Create Channel
        </Button>
      </div>
      <div className="px-8">
        <div className="flex flex-col h-full bg-input_bg rounded-xl w-full">
          <div className="flex flex-col border-b border-white/10 p-6">
            <div className="flex flex-row gap-1.5">
              <span className="text-white/90 font-bold font-lato">
                karabuk-ofis
              </span>
            </div>
            <div className="flex flex-row gap-1.5">
              <div className="flex flex-row gap-1.5">
                <FaCheck className="text-green-800 text-sm my-auto" />
                <span className="text-green-800 text-base my-auto leading-none font-bold">
                  Joined
                </span>
              </div>
              <span className="text-white/40">·</span>
              <div className="flex gap-1.5">
                <span className="text-white/50 text-base font-medium">
                  13 members
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-b border-white/10 p-6">
            <div className="flex flex-row gap-1.5">
              <span className="text-white/90 font-bold font-lato">general</span>
            </div>
            <div className="flex flex-row gap-1.5">
              <div className="flex gap-1.5">
                <span className="text-white/50 text-base font-medium">
                  13 members
                </span>
              </div>
              <span className="text-white/40">·</span>
              <span className="text-white/50 text-base font-medium">
                açıklama
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
