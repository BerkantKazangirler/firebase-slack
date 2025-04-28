import { useState } from "react";
import { Button } from "./button";
import classNames from "classnames";
import { IconPlus } from "@tabler/icons-react";

export const Workspace = () => {
  const [activeWorkspace, setActiveWorkspace] = useState<string | null>("A");

  return (
    <div className="flex flex-col items-center gap-4 px-3 py-4 w-fit">
      <Button
        data-status-id={"A"}
        onClick={(e) =>
          setActiveWorkspace(e.currentTarget.getAttribute("data-status-id"))
        }
        className={classNames(
          "size-11 text-white font-lato flex transition-all justify-center font-bold rounded-xl",
          {
            "border-4": activeWorkspace == "A",
          }
        )}
      >
        <span className="size-8 bg-workspace_bg rounded-md text-lg items-center my-auto justify-center flex">
          A
        </span>
      </Button>
      <Button
        data-status-id={"B"}
        onClick={(e) =>
          setActiveWorkspace(e.currentTarget.getAttribute("data-status-id"))
        }
        className={classNames(
          "size-11 text-white font-lato flex transition-all justify-center font-bold rounded-xl",
          {
            "border-4": activeWorkspace == "B",
          }
        )}
      >
        <span className="size-8 bg-workspace_bg rounded-md text-lg items-center my-auto justify-center flex">
          B
        </span>
      </Button>
      <Button
        data-status-id={"C"}
        onClick={(e) =>
          setActiveWorkspace(e.currentTarget.getAttribute("data-status-id"))
        }
        className={classNames(
          "size-11 text-white font-lato flex transition-all justify-center font-bold rounded-xl",
          {
            "border-4": activeWorkspace == "C",
          }
        )}
      >
        <span className="size-8 bg-workspace_bg rounded-md text-lg items-center my-auto justify-center flex">
          C
        </span>
      </Button>
      <Button className="size-8 opacity-50 group text-white font-lato flex transition-all justify-center font-bold rounded-xl">
        <IconPlus stroke={2} />
      </Button>
    </div>
  );
};
