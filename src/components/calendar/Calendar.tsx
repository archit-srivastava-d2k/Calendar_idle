import React, { useState } from "react";

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState("April");
  const [currentYear, setCurrentYear] = useState(2021);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);

  const months = [
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

  const handlePrevMonth = () => {
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex > 0) {
      setCurrentMonth(months[currentIndex - 1]);
    } else {
      setCurrentMonth(months[11]);
      setCurrentYear(currentYear - 1);
    }
  };

  const handleNextMonth = () => {
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex < 11) {
      setCurrentMonth(months[currentIndex + 1]);
    } else {
      setCurrentMonth(months[0]);
      setCurrentYear(currentYear + 1);
    }
  };

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const calendarDays = [
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 1, isCurrentMonth: false },
    { day: 2, isCurrentMonth: false },
  ];

  return (
    <div
      className="flex items-center justify-center "
      style={{ backgroundColor: "#F6F6F6" }}
    >
      <div
        className="w-96 rounded-lg shadow-lg p-6"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-100 rounded-full bg-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
                className="px-3 py-1 border border-gray-300 rounded flex items-center gap-1 hover:bg-gray-50 bg-white"
              >
                <span className="font-bold text-black">{currentMonth}</span>
                <svg
                  className="w-4 h-4"
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

              {isMonthDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 max-h-48 overflow-y-auto">
                  {months.map((month) => (
                    <button
                      key={month}
                      onClick={() => {
                        setCurrentMonth(month);
                        setIsMonthDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                        month === currentMonth
                          ? "text-blue-600 font-medium"
                          : ""
                      }`}
                    >
                      {month}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="font-bold text-black">{currentYear}</span>
          </div>

          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-100 rounded-full bg-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-600 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((dayObj, index) => (
            <div
              key={index}
              className={`w-10 h-10 flex items-center justify-center text-xs rounded ${
                dayObj.isCurrentMonth
                  ? "bg-white text-gray-900 font-medium"
                  : "bg-white text-gray-400"
              } hover:bg-gray-100 cursor-pointer`}
            >
              {dayObj.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
