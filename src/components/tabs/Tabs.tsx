import { useState } from "react";
import { tabsData } from "./data";
import { TabContent } from "./TabContent";
import CustomCalendar from "../calendar/Calendar";

const TAB_NAMES = [
  "Yesterday",
  "Today",
  "Tomorrow",
  "This Week",
  "Next Week",
  "This Month",
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("Today");
  const currentData = tabsData[activeTab] || { date: "", items: [] };

  return (
    <div className="flex flex-col bg-white">
     
    

      <div className="px-8 pb-6">
        <div className="flex items-center justify-between gap-4 px-4 py-1 rounded-lg bg-[#edf7ff]">
          <div className="flex gap-2">
            {TAB_NAMES.map((name) => {
              const isActive = name === activeTab;
              return (
                <button
                  key={name}
                  onClick={() => setActiveTab(name)}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-[#012c5b] text-white"
                      : "bg-transparent text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>

          <button className="bg-transparent text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-1 whitespace-nowrap">
            ▼ Filters
          </button>
        </div>
      </div>

      <div className="px-8 pb-8 flex justify-between w-full">
        <div className="w-[70%]">

        <TabContent data={currentData} />
        </div>
        <div className="">
          <CustomCalendar />
          </div>
      </div>
    </div>
  );
};

export default Tabs;
