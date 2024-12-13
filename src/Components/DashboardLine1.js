import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
function DashboardLine1({ image, name, value, date, revenue, profit, status }) {
  return (
    <div className="w-full px-4 border-b text-[#E1E2E6] border-[#E1E2E6] rounded-md text-base flex mt-10">
      <div className="font-semibold  w-[20vw] p-3 flex items-center gap-3">
        <img src={image} className="w-12 h-12 rounded-full" />
        <span>{name}</span>
      </div>
      <div className="flex justify-between ">
        <div className="w-[10vw] h-full flex items-center">{value}</div>
        <div className="w-[10vw] h-full flex items-center">{date}</div>
        <div className="w-[10vw]  h-full flex items-center">{date}</div>
        <div className="w-[10vw] h-full flex items-center">{profit}</div>
        <div
          className={`w-[10vw] h-full flex items-center ${
            status == "pending"
              ? " text-[#F18E38]"
              : status == "refund"
              ? " text-red-500"
              : "text-green-600"
          } `}
        >
          {status}
        </div>
        <div className="w-[10vw] h-full flex items-center gap-2">
          <CiEdit className=" cursor-pointer w-5 h-5" />
          <MdDelete
            onClick={(e) => {
              e.preventDefault();
              let elem =
                e.currentTarget.parentElement.parentElement.parentElement;
              elem.remove();
            }}
            className="cursor-pointer w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
}
export default DashboardLine1;
