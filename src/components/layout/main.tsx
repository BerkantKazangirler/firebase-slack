import classNames from "classnames";
import { Workspace, Sidebar, Header } from "@/components";
import { useLayoutContext } from "@/contexts";

export const MainLayout = () => {
  const { theme, collapse } = useLayoutContext();

  return (
    <div className={`flex flex-col w-full h-screen bg-primary theme-${theme}`}>
      <Header />
      <div className="flex flex-row w-full h-full">
        <div
          className={classNames("transition-all z-20 duration-300", {
            "-translate-x-40 opacity-0": !collapse,
            "translate-x-0 opacity-100": collapse,
          })}
        >
          <Workspace />
        </div>

        <div
          className={classNames("w-full transition-all duration-300", {
            "-translate-x-[69px]": !collapse,
            "translate-x-0": collapse,
          })}
        >
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
