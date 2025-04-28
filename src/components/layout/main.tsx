import { Header } from "../ui/header";
import { Sidebar } from "../ui/side-bar";
import { Workspace } from "../ui/workspace";
import { useLayoutContext } from "@/contexts";

export const MainLayout = () => {
  const { theme, collapse } = useLayoutContext();
  return (
    <div className={`flex flex-col w-full h-screen bg-primary theme-${theme}`}>
      <Header />
      <div className="flex flex-row w-full h-full">
        {collapse && <Workspace />}

        <Sidebar />
      </div>
    </div>
  );
};
