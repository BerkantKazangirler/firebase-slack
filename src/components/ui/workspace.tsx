import { Button } from "@/components";
import classNames from "classnames";
import { GoPlus } from "react-icons/go";
import { useLayoutContext, useWorkspaceContext } from "@/contexts";

export const Workspace = () => {
  const { activeWorkspace, setActiveWorkspace } = useLayoutContext();
  const { workspaces } = useWorkspaceContext();

  return (
    <div className="flex flex-col items-center gap-4 px-3 py-4 w-fit">
      {workspaces.map((data, index) => (
        <Button
          key={index}
          data-status-id={data.id}
          onClick={(e) =>
            setActiveWorkspace(e.currentTarget.getAttribute("data-status-id"))
          }
          className={classNames(
            "size-11 text-white font-lato flex transition-all justify-center font-bold rounded-xl",
            {
              "border-4": activeWorkspace == data.id,
            }
          )}
        >
          <span className="size-8 bg-workspace_bg rounded-md text-lg items-center my-auto justify-center flex">
            {data.id}
          </span>
        </Button>
      ))}

      <Button className="size-8 opacity-50 group text-white font-lato flex transition-all justify-center font-bold rounded-xl">
        <GoPlus />
      </Button>
    </div>
  );
};
