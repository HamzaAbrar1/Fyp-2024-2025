import { PiChartLineUpLight } from "react-icons/pi";
import { PiChartLineDownThin } from "react-icons/pi";
function RevenueBox({ name, value, sign, value1 }) {
  return (
    <div className="w-1/5 border-r-2  border-[#727588] p-2 flex justify-between">
      <div className="w-2/6">
        <span className="flex flex-col gap-2 text-[#E1E2E6] text-sm">
          {name}
        </span>
        <span className="text-white text-base">{value}</span>
      </div>
      <div className={`w-2/6`}>
        <span
          className={`flex flex-col gap-2 ${
            sign == "+"
              ? value1 <= 25
                ? "text-[#F19E38] "
                : "text-green-600"
              : "text-red-700"
          } text-[#E1E2E6] text-sm`}
        >
          {sign}
          {value1}%
        </span>
        <span className="text-white text-base">
          {sign == "+" ? (
            value1 <= 25 ? (
              <PiChartLineUpLight className="text-[#F19E38] text-5xl" />
            ) : (
              <PiChartLineUpLight className=" text-green-600 text-5xl " />
            )
          ) : (
            <PiChartLineDownThin className=" text-red-700 text-5xl " />
          )}
        </span>
      </div>
    </div>
  );
}
export default RevenueBox;
