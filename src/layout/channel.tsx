import { useLayoutContext } from "@/contexts";
import { TooltipProvider } from "@/components";
import classNames from "classnames";
import { WorkspaceSelector } from "@/components/ui/workspace-selector";
import { ChannelHeader } from "@/components/channel-header";

export const ChannelLayout = () => {
  const { collapse } = useLayoutContext();

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
        <WorkspaceSelector />
        <div className="bg-input_bg border-t border-b border-r rounded-r-md border-blue-200/20 flex w-full flex-col py-4">
          <div className="flex flex-col gap-4 h-full relative">
            <ChannelHeader />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};
