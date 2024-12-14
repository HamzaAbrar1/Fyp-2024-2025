import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
function LineBoxInventory({
  name,
  image,
  Qty,
  LastRestocked,
  UnitPrice,
  NetProfit,
  Status,
  Actions,
  Restock,
}) {
  return (
    <div className="w-full text-[#E1E2E6] border-b-[1px] border-[#E1E2E6] pb-1 flex mt-3">
      <div className="ml-[2%] w-[21%] flex items-center gap-2">
        <img src={image} className="w-5 h-5 rounded-full" />
        <span>{name}</span>
      </div>
      <div className="w-[75%] mr-[2%] flex ">
        <span className="w-[14%] flex justify-start">{Qty}</span>
        <span className="w-[14%] flex justify-start">{LastRestocked}</span>
        <span className="w-[14%] flex justify-start pl-2">{UnitPrice}</span>
        <span className="w-[14%] flex justify-start pl-1">{NetProfit}</span>
        <span
          className={`${
            Status == "Under-Stock"
              ? "text-red-600"
              : Status == "Over-Stock"
              ? "text-yellow-600"
              : Status == "Balanced"
              ? "text-green-600"
              : ""
          }
          w-[14%] flex justify-start
          pl-2
          `}
        >
          {Status}
        </span>
        <span className="flex gap-1 w-[14%] justify-start pl-2">
          <CiEdit className="w-4 h-4 bg-transparent cursor-pointer" />
          <MdDelete
            onClick={(e) => {
              e.preventDefault();
              let elem =
                e.currentTarget.parentElement.parentElement.parentElement;
              elem.remove();
            }}
            className="w-4 h-4 bg-transparent cursor-pointer "
          />
        </span>
        <span className="cursor-pointer w-[14%] flex justify-start pl-[10px]">{Restock}</span>
      </div>
    </div>
  );
}
export default LineBoxInventory;
