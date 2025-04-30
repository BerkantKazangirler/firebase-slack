import { Button } from "@/components";
import classNames from "classnames";
import { GoPlus } from "react-icons/go";
import { useLayoutContext, useWorkspaceContext } from "@/contexts";
import Avatar from "react-avatar";

export const Workspace = () => {
  const { activeWorkspace, setActiveWorkspace } = useLayoutContext();
  const { workspaces } = useWorkspaceContext();

  return (
    <div className="flex flex-col items-center gap-4 px-3 py-4 w-fit">
      {workspaces.map((data, index) => (
        <div
          key={index}
          data-status-id={data.id}
          onClick={(e) =>
            setActiveWorkspace(e.currentTarget.getAttribute("data-status-id"))
          }
          className={classNames(
            "size-11 text-white cursor-pointer font-lato flex transition-all justify-center font-bold rounded-xl",
            {
              "border border-blue-200/20": activeWorkspace == data.id,
            }
          )}
        >
          <Avatar
            title
            name={data.title}
            src={data.photo}
            size="32"
            className="rounded-md my-auto"
          />
        </div>
      ))}

      <Button className="size-8 opacity-50 group text-white font-lato flex transition-all justify-center font-bold rounded-xl">
        <GoPlus />
      </Button>
    </div>
  );
};
