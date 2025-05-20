import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components";
import { monthNames, WorkSpaceI } from "@/types";
import Avatar from "react-avatar";
import { FaCaretDown } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

interface DropdownType {
  data: WorkSpaceI;
}

export const WorkspaceDropdown = ({ data }: DropdownType) => {
  const tarih = new Date();
  const ay = tarih.getMonth();
  const gün = tarih.getUTCDate();

  const takvim = monthNames[ay] + " " + gün;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex outline-none flex-row px-1 rounded-md hover:bg-workspace_name_bg gap-1">
          <span className="text-white leading-none my-auto font-lato font-semibold text-lg">
            {data.title}
          </span>

          <FaCaretDown className="text-white my-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 font-lato border border-white/20">
        <div className="flex flex-row">
          <div className="size-11 text-white font-lato flex transition-all justify-center font-bold rounded-xl">
            <Avatar
              title={data.title}
              name={data.title}
              src={data.photo}
              size="32"
              className="rounded-md my-auto bg-workspace_bg"
            />
          </div>
          <div className="flex flex-col my-auto">
            <span className="text-white text-sm font-bold opacity-60">
              {data.title}
            </span>
            <span className="text-white text-xs opacity-60">{data.url}</span>
          </div>
        </div>
        <DropdownMenuSeparator />
        {data.premium ? (
          <DropdownMenuItem className="flex group flex-col">
            <div className="flex flex-row gap-1">
              <IoRocketOutline />
              <span className="leading-none text-center my-auto">
                Your <b>Pro</b> last through {takvim}
              </span>
            </div>
            <a className="text-blue-500 group-hover:underline leading-none font-bold text-xs">
              See upgrade options
            </a>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem className="flex flex-col">
            <div className="flex flex-row gap-3">
              <IoRocketOutline />
              <span className="leading-none text-center my-auto">Upgrade</span>
            </div>
            <span className="opacity-70 text-xs">
              You're on the <b>free version</b> of Slack
            </span>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        {!data.premium && (
          <>
            <DropdownMenuItem>
              On the free version of Slack, messages and files older than 90
              days will be hidden. To access your history, upgrade now.
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem>Invite people to {data.title}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Preferences</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Filter sidebar</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-60">
              <DropdownMenuItem>Customize workspace</DropdownMenuItem>
              <DropdownMenuItem>Workflow Builder</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Tools & settings</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-60">
              <DropdownMenuLabel className="text-xs">Tools</DropdownMenuLabel>
              <DropdownMenuItem>Customize workspace</DropdownMenuItem>
              <DropdownMenuItem>Workflow Builder</DropdownMenuItem>
              <DropdownMenuItem>Workspace analytics</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs">
                Administrator
              </DropdownMenuLabel>
              <DropdownMenuItem>Manage apps</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem disabled>
          <div className="flex flex-col">
            Leave channels{" "}
            <p className="text-xs">Looking fresh! No new recommendation</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign in on mobile</DropdownMenuItem>
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
