import { useState } from "react";
import { tabsData } from "./data";
import TabContent from "./TabContent";
import Calendar from "../calendar/Calendar";

const TAB_NAMES = [
  "Yesterday",
  "Today",
  "Tomorrow",
  "This Week",
  "Next Week",
  "This Month",
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Today");

  return (
    <div className="flex flex-col bg-white">
      <div className="px-4 sm:px-6 md:pb-6 md:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-lg bg-blue-50 px-3 py-2 sm:px-4 sm:py-1">
          
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            {TAB_NAMES.map((name) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`whitespace-nowrap rounded px-3 py-1.5 
                  font-poppins font-medium text-[14px] leading-[100%] 
                  transition-colors
                  ${
                    name === activeTab
                      ? "bg-blue-900 text-white"
                      : "bg-transparent text-gray-700 hover:bg-blue-100"
                  }`}
              >
                {name}
              </button>
            ))}
          </div>

          <button className="font-poppins font-medium text-[14px] leading-[100%] text-gray-700 hover:text-gray-900 shrink-0">
            ▼ Filters
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 w-full px-4 sm:px-6 md:px-8 pb-6 md:pb-8">
        <div className="flex-1 lg:w-7/12 min-w-0">
          <TabContent data={tabsData[activeTab]} />
        </div>

        <div className="w-full lg:w-auto lg:shrink-0">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
