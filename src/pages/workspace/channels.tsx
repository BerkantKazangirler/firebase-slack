import { useLayoutContext } from "@/contexts";
import classNames from "classnames";

export const Channels = () => {
  const { collapse } = useLayoutContext();

  return (
    <div
      className={classNames(
        //
        "flex flex-row p-4 rounded-md bg-workspace_menus_bg transition-all duration-300 w-full",
        {
          "translate-x-0": collapse,
          "-translate-x-[69px]": !collapse,
        }
      )}
    >
      <span>asd</span>
    </div>
  );
};
