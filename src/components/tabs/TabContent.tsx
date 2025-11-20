import React from "react";
import type { TabData } from "./data";

interface TabContentProps {
  data: TabData;
}

export const TabContent: React.FC<TabContentProps> = ({ data }) => {
  return (
    <div className="flex-1 ">
      <h3 className="text-base font-semibold mb-3 text-gray-900">
        {data.date}
      </h3>

      <div className="bg-white rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-4 px-4 py-2.5 bg-[#f6f6f6]">
          <div className="text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Time (IST)
          </div>
          <div className="text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Country
          </div>
          <div className="text-xs font-semibold text-gray-700 uppercase tracking-tight">
            Event
          </div>
        </div>

        <div>
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 gap-4 px-4 py-3 border-b border-gray-200 hover:bg-gray-50 last:border-b-0"
            >
              <div className="text-sm text-gray-900">{item.time}</div>
              <div className="text-sm text-gray-900 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600"></span>
                <span>{item.country}</span>
              </div>
              <div className="text-sm text-gray-900">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
