import type { TabData } from "./data";

interface TabContentProps {
  data: TabData;
}

export default function TabContent({ data }: TabContentProps) {
  return (
    <div>
      {/* Date Heading (your existing styles kept) */}
      <h3 className="mb-3 text-sm sm:text-base font-semibold text-gray-900">
        {data.date}
      </h3>

      <div className="rounded-lg bg-white overflow-x-auto">
        
        {/* Desktop Column Headings */}
        <div className="hidden sm:grid grid-cols-3 gap-3 sm:gap-4 bg-gray-100 px-3 sm:px-4 py-2.5 min-w-full">
          <div className="font-poppins font-medium text-[14px] leading-[100%] text-gray-700">
            Time (IST)
          </div>
          <div className="font-poppins font-medium text-[14px] leading-[100%] text-gray-700">
            Country
          </div>
          <div className="font-poppins font-medium text-[14px] leading-[100%] text-gray-700">
            Event
          </div>
        </div>

        <div>
          {data.items.map((item, idx) => (
            <div key={idx}>
              
              {/* Desktop View */}
              <div className="hidden sm:grid grid-cols-3 gap-3 sm:gap-4 border-b border-gray-200 px-3 sm:px-4 py-3 hover:bg-gray-50 last:border-b-0">
                
                <div className="font-poppins font-normal text-[16px] leading-[100%] text-gray-900">
                  {item.time}
                </div>

                <div className="flex items-center gap-2 font-poppins font-normal text-[16px] leading-[100%] text-gray-900">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"></span>
                  {item.country}
                </div>

                <div className="font-poppins font-normal text-[16px] leading-[100%] text-gray-900">
                  {item.event}
                </div>
              </div>

              {/* Mobile View */}
              <div className="sm:hidden border-b border-gray-200 px-3 py-3 hover:bg-gray-50 last:border-b-0">

                <div className="font-poppins font-medium text-[14px] leading-[100%] text-gray-700 mb-1">
                  Time (IST)
                </div>
                <div className="font-poppins font-normal text-[16px] leading-[100%] text-gray-900 mb-2">
                  {item.time}
                </div>

                <div className="font-poppins font-medium text-[14px] leading-[100%] text-gray-700 mb-1">
                  Country
                </div>
                <div className="flex items-center gap-2 font-poppins font-normal text-[16px] leading-[100%] text-gray-900 mb-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"></span>
                  {item.country}
                </div>

                <div className="font-poppins font-medium text-[14px] leading-[100%] text-gray-700 mb-1">
                  Event
                </div>
                <div className="font-poppins font-normal text-[16px] leading-[100%] text-gray-900">
                  {item.event}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
