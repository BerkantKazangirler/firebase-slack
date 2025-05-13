import { Button } from "@/components";
import classNames from "classnames";
import { useState } from "react";

export const CreateChannel = () => {
  const [activeCategory, setActiveCategory] = useState<string>("blank");
  const [showAllTemplates, setShowAllTemplates] = useState<boolean>(false);

  const categories = [
    {
      text: "Blank channel",
      category: "blank",
    },
    {
      text: "Project starter kit",
      category: "starterkit",
    },
    {
      text: "Help requests process",
      category: "requestsprocess",
    },
    {
      text: "Team support",
      category: "support",
    },
    {
      text: "Feedback intake and triage",
      category: "feedback",
    },
    {
      text: "New hire onboarding",
      category: "newhire",
    },
    {
      text: "1-1 Coaching",
      category: "coaching",
    },
    {
      text: "Sales deal tracking",
      category: "dealtracking",
    },
    {
      text: "Customer support",
      category: "customersupport",
    },
    {
      text: "External partner starter kit",
      category: "partnerstarterkit",
    },
    {
      text: "Event prep starter kit",
      category: "prepstarterkit",
    },
    {
      text: "Ask an expert",
      category: "askexpert",
    },
    {
      text: "Marketing campaign starter kit",
      category: "marketingstarterkit",
    },
    {
      text: "Sales enablement hub",
      category: "enablementhub",
    },
    {
      text: "Bug intake and triage",
      category: "bugintake",
    },
    {
      text: "Brand guidelines hub",
      category: "brandguild",
    },
    {
      text: "Employee benefıts hub",
      category: "employeebenhub",
    },
    {
      text: "Time off request process",
      category: "timeoffrequest",
    },
  ];

  return (
    <div className="flex flex-row w-full h-96">
      <div className="flex flex-col w-1/4 gap-2 border-r border-white/20">
        <p className="text-white font-semibold px-6 pt-6">Create a channel</p>
        <div className="flex flex-col h-fit px-6 scrollbar-hide overflow-y-auto gap-1.5">
          {showAllTemplates ? (
            <>
              {categories.map((data, index) => (
                <Button
                  key={index}
                  onClick={() => setActiveCategory(data.category)}
                  className={classNames(
                    "hover:bg-white/10 transition-all rounded-md text-white/70 text-sm text-start py-0.5 px-2",
                    {
                      "bg-active_menu_bg": activeCategory == data.category,
                    }
                  )}
                >
                  {data.text}
                </Button>
              ))}
            </>
          ) : (
            <>
              {categories.slice(0, 8).map((data, index) => (
                <Button
                  key={index}
                  onClick={() => setActiveCategory(data.category)}
                  className={classNames(
                    "hover:bg-white/10 transition-all rounded-md text-white/70 text-sm text-start py-0.5 px-2",
                    {
                      "bg-active_menu_bg": activeCategory == data.category,
                    }
                  )}
                >
                  {data.text}
                </Button>
              ))}
            </>
          )}
          {!showAllTemplates && (
            <Button
              onClick={() => setShowAllTemplates(true)}
              className="text-blue-400 text-xs text-start px-2 hover:underline w-fit"
            >
              Show all templates
            </Button>
          )}
        </div>
        <div className="border-t border-white/20 p-4">
          <Button className="bg-green-600/50 text-sm py-1 text-white font-semibold w-full rounded-md">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
