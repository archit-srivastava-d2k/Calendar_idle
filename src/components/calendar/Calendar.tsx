import { useState } from "react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const YEARS = Array.from({ length: 71 }, (_, i) => 1980 + i);

const DAYS_OF_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export default function Calendar() {
  const [month, setMonth] = useState("April");
  const [year, setYear] = useState(2021);

  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);

  const currentMonthIndex = MONTHS.indexOf(month);

  const getCalendarDays = () => {
    const firstDay = new Date(year, currentMonthIndex, 1).getDay();
    const daysInMonth = new Date(year, currentMonthIndex + 1, 0).getDate();
    const prevMonthDays = new Date(year, currentMonthIndex, 0).getDate();

    const prefix = [...Array((firstDay + 6) % 7)].map((_, i) => ({
      day: prevMonthDays - ((firstDay + 6) % 7) + i + 1,
      isCurrent: false,
    }));

    const current = [...Array(daysInMonth)].map((_, i) => ({
      day: i + 1,
      isCurrent: true,
    }));

    const totalCells = prefix.length + current.length;
    const suffix = [...Array(42 - totalCells)].map((_, i) => ({
      day: i + 1,
      isCurrent: false,
    }));

    return [...prefix, ...current, ...suffix];
  };

  const days = getCalendarDays();

  return (
    <div className="w-[426px] h-[396px] bg-[#F4F4F5] rounded-[16px] p-6 shadow-md font-poppins select-none">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        {/* Left Arrow */}
        <button
          onClick={() => {
            if (currentMonthIndex === 0) {
              setMonth("December");
              setYear(year - 1);
            } else setMonth(MONTHS[currentMonthIndex - 1]);
          }}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100"
        >
          <span className="text-xl">‹</span>
        </button>

        {/* Month + Year */}
        <div className="flex gap-2 items-center">

          {/* Month Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setOpenMonth(!openMonth);
                setOpenYear(false);
              }}
              className={`px-3 py-1 border bg-white rounded flex items-center gap-1 transition
                font-poppins font-medium text-[18px] leading-[100%]
                ${openMonth ? "border-2 border-blue-600" : "border-gray-300"}
              `}
            >
              <span className="font-bold text-[24px] tracking-[-1%] leading-[100%]">
                {month}
              </span>
              ▾
            </button>

            {openMonth && (
              <div className="absolute top-full left-0 mt-1 w-36 max-h-48 overflow-y-auto bg-white border shadow rounded z-20">
                {MONTHS.map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setMonth(m);
                      setOpenMonth(false);
                    }}
                    className={`
                      w-full text-left px-3 py-2 font-poppins text-[18px] leading-[100%] 
                      ${m === month ? "text-blue-600 font-medium" : ""}
                      hover:bg-gray-100
                    `}
                  >
                    {m}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Year Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setOpenYear(!openYear);
                setOpenMonth(false);
              }}
              className={`px-3 py-1 border bg-white rounded flex items-center gap-1 transition
                font-poppins font-medium text-[18px] leading-[100%]
                ${openYear ? "border-2 border-blue-600" : "border-gray-300"}
              `}
            >
              <span className="font-bold text-[24px] tracking-[-1%] leading-[100%]">
                {year}
              </span>
              ▾
            </button>

            {openYear && (
              <div className="absolute top-full left-0 mt-1 w-28 max-h-60 overflow-y-auto bg-white border shadow rounded z-20">
                {YEARS.map((y) => (
                  <button
                    key={y}
                    onClick={() => {
                      setYear(y);
                      setOpenYear(false);
                    }}
                    className={`
                      w-full text-left px-3 py-2 font-poppins text-[18px] leading-[100%]
                      ${y === year ? "text-blue-600 font-medium" : ""}
                      hover:bg-gray-100
                    `}
                  >
                    {y}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right Arrow */}
        <button
          onClick={() => {
            if (currentMonthIndex === 11) {
              setMonth("January");
              setYear(year + 1);
            } else setMonth(MONTHS[currentMonthIndex + 1]);
          }}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100"
        >
          <span className="text-xl">›</span>
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 text-center text-gray-600 mb-2">
        {DAYS_OF_WEEK.map((d) => (
          <div
            key={d}
            className="font-poppins font-medium text-[18px] leading-[100%] text-center"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <div
            key={i}
            className={`
              h-10 flex items-center justify-center rounded cursor-pointer
              font-poppins text-[18px] leading-[100%] text-center
              ${
                d.isCurrent
                  ? "bg-white text-black font-medium"
                  : "text-gray-400 font-medium"
              }
              hover:bg-gray-200
            `}
          >
            {d.day}
          </div>
        ))}
      </div>
    </div>
  );
}
