import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
function Card() {
    let navigate=useNavigate();
  return (
    <div className="w-[14vw] rounded-lg bg-[#121737] h-[40vh] flex flex-col justify-between py-2 items-center">
      <div className="bg-[#36408a]  rounded-md">
        <FaHeadphones className="text-white w-12 h-12"/>

      </div>
      <div className="text-[#E1E2E6]">JBL</div>
      <div className="text-[#727588] text-sm text-light">Quantum 100</div>
      <div className=" flex gap-1 w-[90%] ml-[10%]">
        <FaStar className="w-5 h-5 text-[#F19E38]" />
        <span className="text-[#727588] text-base">
          4.4 {"(11186 reveiws)"}
        </span>
      </div>
      <div className="text-[#727588] text-base">More details</div>
      <div onClick={(e)=>{
        e.preventDefault()
        navigate("/")

      }} className="w-3/5 h-[5vh] bg-[#F19E38] cursor-pointer rounded-md flex justify-around items-center">
        <span>39$</span>
        <span>Amazon</span>
      </div>
    </div>
  );
}

export default Card;
