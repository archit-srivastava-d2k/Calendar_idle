import type { TabData } from "./data";

interface TabContentProps {
  data: TabData;
}

export default function TabContent({ data }: TabContentProps) {
  return (
    <div>
      <h3 className="mb-3 text-base font-semibold text-gray-900">
        {data.date}
      </h3>

      <div className="rounded-lg bg-white">
        <div className="grid grid-cols-3 gap-4 bg-gray-100 px-4 py-2.5">
          <div className="text-xs font-semibold uppercase text-gray-700">
            Time (IST)
          </div>
          <div className="text-xs font-semibold uppercase text-gray-700">
            Country
          </div>
          <div className="text-xs font-semibold uppercase text-gray-700">
            Event
          </div>
        </div>

        <div>
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 gap-4 border-b border-gray-200 px-4 py-3 hover:bg-gray-50 last:border-b-0"
            >
              <div className="text-sm text-gray-900">{item.time}</div>
              <div className="flex items-center gap-2 text-sm text-gray-900">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span>
                {item.country}
              </div>
              <div className="text-sm text-gray-900">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
