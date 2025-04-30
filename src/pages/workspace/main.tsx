import { Sidebar } from "@/components";
import { useLayoutContext } from "@/contexts";
import classNames from "classnames";

export const Workspace = () => {
  const { collapse } = useLayoutContext();
  return (
    <div className="flex flex-row w-full">
      <div
        className={classNames(
          "transition-all max-w-[16%] w-full duration-300",
          {
            // "-translate-x-[69px]": !collapse,
            "translate-x-0": collapse,
          }
        )}
      >
        <Sidebar />
      </div>
    </div>
  );
};
