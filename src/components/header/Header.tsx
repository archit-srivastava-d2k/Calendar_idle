export default function Header() {
  return (
    <div className="px-4 py-6 sm:px-6 md:px-8 md:py-8">

      {/* Title */}
      <h1 className="font-quicksand font-semibold text-[44px] leading-[100%] tracking-[0%] text-gray-900">
        Economic <span className="text-orange-500">Calendar</span>
      </h1>

      {/* Paragraph */}
      <p className="font-poppins font-normal text-[16px] leading-[150%] mt-3 text-gray-600">
        Stay updated with key global economic events,
        interest rate decisions, and bond auctions.
      </p>

    </div>
  );
}
