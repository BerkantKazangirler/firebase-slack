import { Button } from "@/components";
import classNames from "classnames";
import { useState } from "react";
import { CgLock } from "react-icons/cg";
import { FaHashtag } from "react-icons/fa";

export const CreateChannel = () => {
  const [activeCategory, setActiveCategory] = useState<string>("blank");
  const [showAllTemplates, setShowAllTemplates] = useState<boolean>(false);

  const [selectedPublic, setSelectedPublic] = useState<boolean>(false);

  const categories = [
    {
      text: "Blank channel",
      category: "blank",
      templatename: "channel-name",
    },
    {
      text: "Project starter kit",
      category: "starterkit",
      templatename: "project-name",
    },
    {
      text: "Help requests process",
      category: "requestsprocess",
      templatename: "help-name",
    },
    {
      text: "Team support",
      category: "support",
      templatename: "team-name",
    },
    {
      text: "Feedback intake and triage",
      category: "feedback",
      templatename: "feedback-name",
    },
    {
      text: "New hire onboarding",
      category: "newhire",
      templatename: "welcome-name",
    },
    {
      text: "1-1 Coaching",
      category: "coaching",
      templatename: "coaching-name",
    },
    {
      text: "Sales deal tracking",
      category: "dealtracking",
      templatename: "sales-deals-name",
    },
    {
      text: "Customer support",
      category: "customersupport",
      templatename: "ext-customer-name",
    },
    {
      text: "External partner starter kit",
      category: "partnerstarterkit",
      templatename: "ext-name",
    },
    {
      text: "Event prep starter kit",
      category: "prepstarterkit",
      templatename: "event-name",
    },
    {
      text: "Ask an expert",
      category: "askexpert",
      templatename: "ask-name",
    },
    {
      text: "Marketing campaign starter kit",
      category: "marketingstarterkit",
      templatename: "marketing-campaign-name",
    },
    {
      text: "Sales enablement hub",
      category: "enablementhub",
      templatename: "sales-enablement-hub-name",
    },
    {
      text: "Bug intake and triage",
      category: "bugintake",
      templatename: "bugs-name",
    },
    {
      text: "Brand guidelines hub",
      category: "brandguild",
      templatename: "brand-guidelines-name",
    },
    {
      text: "Employee benefıts hub",
      category: "employeebenhub",
      templatename: "benefits-hub-name",
    },
    {
      text: "Time off request process",
      category: "timeoffrequest",
      templatename: "request-time-off-name",
    },
  ];

  return (
    <div className="flex flex-row w-full h-[500px]">
      <div className="flex flex-col w-1/4 bg-input_bg gap-2 border-r border-white/20">
        <p className="text-white font-semibold px-6 pt-6">Create a channel</p>
        <div className="flex flex-col h-full px-6 scrollbar-hide overflow-y-auto gap-1.5">
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
      <div className="flex flex-col w-full bg-purple-700/25 items-center">
        <div className="flex w-10/12 flex-col bg-input_bg border border-white/10 rounded-md h-5/6 my-auto">
          <div className="flex flex-row h-fit px-4 py-2 gap-1">
            {!selectedPublic ? (
              <FaHashtag className="text-white/40 size-4 my-auto" />
            ) : (
              <CgLock className="text-white/40 size-4 my-auto" />
            )}
            <p className="text-white/40 text-sm">
              {
                categories.find((data) => data.category === activeCategory)
                  ?.templatename
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
