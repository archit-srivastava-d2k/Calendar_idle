import { useState } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS_OF_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const CALENDAR_DAYS = [
  { day: 29, isCurrentMonth: false },
  { day: 30, isCurrentMonth: false },
  { day: 31, isCurrentMonth: false },
  ...Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    isCurrentMonth: true,
  })),
  { day: 1, isCurrentMonth: false },
  { day: 2, isCurrentMonth: false },
];

export default function Calendar() {
  const [month, setMonth] = useState("April");
  const [year, setYear] = useState(2021);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentMonthIndex = MONTHS.indexOf(month);

  const goToPrevMonth = () => {
    if (currentMonthIndex > 0) {
      setMonth(MONTHS[currentMonthIndex - 1]);
    } else {
      setMonth(MONTHS[11]);
      setYear(year - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonthIndex < 11) {
      setMonth(MONTHS[currentMonthIndex + 1]);
    } else {
      setMonth(MONTHS[0]);
      setYear(year + 1);
    }
  };

  const ArrowButton = ({
    onClick,
    direction,
  }: {
    onClick: () => void;
    direction: "left" | "right";
  }) => (
    <button
      onClick={onClick}
      className="rounded-full bg-white p-2 hover:bg-gray-100"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );

  return (
    <div className="flex items-center justify-center  ">
      <div className="w-96 rounded-lg bg-gray-100 p-6 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <ArrowButton onClick={goToPrevMonth} direction="left" />

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 rounded border border-gray-300 bg-white px-3 py-1 hover:bg-gray-50"
              >
                <span className="font-bold text-black">{month}</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full z-10 mt-1 max-h-48 overflow-y-auto rounded border border-gray-300 bg-white shadow-lg">
                  {MONTHS.map((m) => (
                    <button
                      key={m}
                      onClick={() => {
                        setMonth(m);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                        m === month ? "font-medium text-blue-600" : ""
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span className="font-bold text-black">{year}</span>
          </div>

          <ArrowButton onClick={goToNextMonth} direction="right" />
        </div>

        <div className="mb-2 grid grid-cols-7 gap-2">
          {DAYS_OF_WEEK.map((day) => (
            <div
              key={day}
              className="py-2 text-center text-sm font-medium text-gray-600"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {CALENDAR_DAYS.map((dayObj, idx) => (
            <div
              key={idx}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded text-xs hover:bg-gray-200 ${
                dayObj.isCurrentMonth
                  ? "bg-white font-medium text-gray-900"
                  : "bg-white text-gray-400"
              }`}
            >
              {dayObj.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
