import { PiChartLineUpLight } from "react-icons/pi";
import { PiChartLineDownThin } from "react-icons/pi";
function AdminFirstComponent({ initial, forecast, value }) {
  return (
    <div className="w-full  flex gap-2 border-2 rounded-md border-[#E1E2E6] pl-1 pt-2 pb-2 relative mt-2">
        <div className="absolute right-2 bottom-2 text-[#E1E2E6] cursor-pointer text-[10px]">
    More
        </div>
      <div>
        <div
          className={`${
            forecast == "Forecasted Increase"
              ? "bg-yellow-700"
              : forecast == "Replenishment Quantity"
              ? "bg-green-600"
              : "bg-red-600"
          } 
            w-6 h-6 text-[#E1E2E6] rounded-full flex justify-center items-center 
            cursor-pointer `}
        >
          !
        </div>
      </div>
      <div className="flex flex-col justify-between  text-[#E1E2E6] text-sm">
        <div>{initial}</div>

        <div className="mt-1 flex w-full justify-between">
          <div>
            <div className="text-[10px] text-[#667A8A]">{forecast}</div>
            <div>{value}</div>
          </div>
          <div
            className={`
            ${
              forecast == "Forecasted Increase"
                ? "text-yellow-700"
                : forecast == "Replenishment Quantity"
                ? "text-green-600"
                : "text-red-600"
            }
            `}
          >
            {forecast == "Forecasted Increase" ? (
              <PiChartLineUpLight className="w-10 h-10" />
            ) : forecast == "Replenishment Quantity" ? (
              <div> </div>
            ) : (
              <PiChartLineDownThin className="w-10 h-10" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminFirstComponent;
