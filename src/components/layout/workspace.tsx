import classNames from "classnames";
import { Workspace, Header, Sidebar } from "@/components";
import { useLayoutContext } from "@/contexts";
import { Outlet } from "react-router-dom";

export const WorkspaceLayout = () => {
  const { theme, collapse } = useLayoutContext();

  return (
    <div
      className={`flex flex-col overflow-x-hidden w-full h-screen bg-primary theme-${theme}`}
    >
      <Header />
      <div className="flex flex-row h-full w-full">
        <div
          className={classNames("transition-all z-20 duration-300", {
            "-translate-x-40 opacity-0": !collapse,
            "-translate-x-0 opacity-100": collapse,
          })}
        >
          <Workspace />
        </div>
        <div
          className={classNames(
            "flex transition-all duration-300 flex-row max-w-[16%]",
            {
              "-translate-x-[67px]": !collapse,
            }
          )}
        >
          <Sidebar />
        </div>

        <Outlet />
      </div>
    </div>
  );
};
