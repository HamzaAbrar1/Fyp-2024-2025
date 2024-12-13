import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
function DashboardLine2({
  image,
  name,
  value,
  date,
  revenue,
  profit,
  status,
  id,
}) {
  return (
    <div className="w-full px-4 border-b text-[#E1E2E6] border-[#E1E2E6] rounded-md text-base flex mt-10">
      <div className="flex justify-between ">
        <div className="w-[9vw] h-full flex items-center">
          {id || "#12321312"}
        </div>
   {image?     <div className="font-semibold  w-[10vw] p-3 flex items-center flex-col gap-3 mr-3">
          <div className="flex">
            <img src={image} className="w-8 h-8 rounded-full" />
            <img src={image} className="w-8 h-8 rounded-full" />
          </div>
          <div className="flex">
            <img src={image} className="w-8 h-8 rounded-full" />
            <img src={image} className="w-8 h-8 rounded-full" />
          </div>
        </div>:{name}
   }
        <div className="w-[9vw] h-full flex items-center">{value}</div>
        <div className="w-[9vw] h-full flex items-center">{date}</div>
        <div className="w-[9vw]  h-full flex items-center">{date}</div>
        <div className="w-[9vw] h-full flex items-center">{profit}</div>
        <div
          className={`w-[9vw] h-full flex items-center ${
            status == "pending"
              ? " text-[#F18E38]"
              : status == "refund"
              ? " text-red-500"
              : "text-green-600"
          } `}
        >
          {status}
        </div>
        <div className="w-[9vw] h-full flex items-center gap-2">
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
export default DashboardLine2;
