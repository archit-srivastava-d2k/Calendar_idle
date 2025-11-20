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
      <div className="px-8 pb-6">
        <div className="flex items-center justify-between gap-4 rounded-lg bg-blue-50 px-4 py-1">
          <div className="flex gap-2">
            {TAB_NAMES.map((name) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`whitespace-nowrap rounded px-3 py-1.5 text-sm font-medium transition-colors ${
                  name === activeTab
                    ? "bg-blue-900 text-white"
                    : "bg-transparent text-gray-700 hover:bg-blue-100"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
            ▼ Filters
          </button>
        </div>
      </div>

      <div className="flex w-full justify-between px-8 pb-8">
        <div className="w-[70%]">
          <TabContent data={tabsData[activeTab]} />
        </div>
        <Calendar />
      </div>
    </div>
  );
}
