import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
} from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { UsersI } from "@/types";
import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
import { LuListFilter } from "react-icons/lu";

export const AllPeople = () => {
  const [userTestData, setUserTestData] = useState<UsersI[]>([]);

  useEffect(() => {
    setUserTestData([
      {
        id: "asd",
        contact_info: {
          email: "asdasda@gmail.com",
          phone: "05555555",
        },
        display_name: "Berkant Test",
        email: "berasda@gasdasda.com",
        local_time: "UTC",
        name: "Berkant",
        status: "ONLINE",
        title: "Test Agent",
      },
      {
        id: "asd",
        contact_info: {
          email: "asdasda@gmail.com",
          phone: "05555555",
        },
        display_name: "Berkant Test 2",
        email: "berasda@gasdasda.com",
        local_time: "UTC",
        name: "Berkant",
        status: "ONLINE",
        title: "Dynamic Agent",
      },
    ]);
  }, []);

  return (
    <div className="w-full px-6 py-4 gap-3 flex flex-col rounded-md bg-input_bg h-full">
      <div className="flex flex-row w-full h-fit justify-between">
        <span className="text-white font-lato text-lg font-bold">
          All people
        </span>
        <Button className="text-white bg-white/5 border border-white/10 px-2 py-1 rounded-md font-lato font-bold">
          Invite People
        </Button>
      </div>
      <div className="flex relative w-full h-fit">
        <CiSearch className="absolute text-white/60 z-20 text-xl my-1.5 ml-3" />
        <Input
          placeholder="Search for people"
          className="rounded-md border indent-7 leading-none border-white/10 bg-white/5 w-full py-1 px-3 outline-blue-400 text-white/60 placeholder:text-white/40"
        />
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-xs flex gap-1 flex-row font-lato font-bold text-white bg-white/5 px-3 rounded-md border border-white/10 py-1">
              Title
              <HiChevronDown className="my-auto leading-none text-base" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-workspace_menus_bg max-h-60 overflow-y-auto scrollbar-hide flex flex-col gap-3 border-white/10 pt-5 pb-2">
              <div className="flex relative px-3 w-full h-fit">
                <CiSearch className="absolute text-white/60 z-20 text-xl my-1.5 ml-3" />
                <Input
                  placeholder="Ex. Director"
                  className="rounded-md border indent-7 leading-none border-white/10 bg-white/5 w-full py-1 px-3 outline-none text-white/60 placeholder:text-white/40"
                />
              </div>
              <DropdownMenuLabel className="text-white/20 px-4 text-xs">
                Suggestions
              </DropdownMenuLabel>
              <div className="flex flex-col">
                {userTestData.map((data) => (
                  <>
                    {Array(data?.title)?.map((data, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="text-white/60 flex flex-row gap-3 px-4"
                      >
                        <input type="checkbox" />
                        <span className="text-xs font-lato">{data}</span>
                      </DropdownMenuItem>
                    ))}
                  </>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-xs flex gap-1 flex-row font-lato font-bold text-white bg-white/5 px-3 rounded-md border border-white/10 py-1">
              Location
              <HiChevronDown className="my-auto leading-none text-base" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-workspace_menus_bg max-h-60 overflow-y-auto scrollbar-hide flex flex-col gap-3 border-white/10 pt-5 pb-2">
              <div className="flex relative px-3 w-full h-fit">
                <CiSearch className="absolute text-white/60 z-20 text-xl my-1.5 ml-3" />
                <Input
                  placeholder="Ex. Director"
                  className="rounded-md border indent-7 leading-none border-white/10 bg-white/5 w-full py-1 px-3 outline-none text-white/60 placeholder:text-white/40"
                />
              </div>
              <DropdownMenuLabel className="text-white/20 px-4 text-xs">
                Suggestions
              </DropdownMenuLabel>
              <div className="flex flex-col">
                {userTestData.map((data) => (
                  <>
                    {Array(data?.title)?.map((data, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="text-white/60 flex flex-row gap-3 px-4"
                      >
                        <input type="checkbox" />
                        <span className="text-xs font-lato">{data}</span>
                      </DropdownMenuItem>
                    ))}
                  </>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Dialog>
            <DialogTrigger className="text-xs flex gap-1 flex-row font-lato font-bold text-blue-400 px-3 rounded-md py-1">
              <LuListFilter className="leading-none h-full my-auto text-lg" />
              Filters
            </DialogTrigger>
            <DialogContent className="bg-workspace_menus_bg max-h-60 overflow-y-auto scrollbar-hide flex flex-col gap-3 border-white/10 pt-5 pb-2">
              <p className="text-white font-lato text-xl font-bold">
                Filter by
              </p>
            </DialogContent>
          </Dialog>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-xs flex gap-1 flex-row font-lato font-bold text-white bg-white/5 px-3 rounded-md border border-white/10 py-1">
            A to Z
            <HiChevronDown className="my-auto leading-none text-base" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-workspace_menus_bg w-56 overflow-y-auto scrollbar-hide flex flex-col gap-3 border-white/10 py-2">
            <div className="flex flex-col">
              <DropdownMenuItem className="text-white/60 flex flex-row gap-3 px-4">
                <span className="text-xs font-lato">A to Z</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white/60 flex flex-row gap-3 px-4">
                <span className="text-xs font-lato">Z to A</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-4 w-full gap-4 h-full">
        {userTestData.map((data, index) => (
          <div
            key={index}
            className="bg-white/5 h-full border flex flex-col border-white/5 rounded-md"
          >
            <Avatar
              title={data?.name}
              name={data?.display_name}
              src={data?.photo}
              size="120"
              className="bg-workspace_bg rounded-md text-lg flex"
            />
            <span>asd</span>
          </div>
        ))}
      </div>
    </div>
  );
};
