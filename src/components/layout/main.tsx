import { Header } from "../ui/header";
import { Sidebar } from "../ui/side-bar";
import { Workspace } from "../ui/workspace";

export const MainLayout = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#18256b]">
      <Header />
      <div className="flex flex-row w-full h-full">
        <Workspace />
        <Sidebar />
      </div>
    </div>
  );
};
