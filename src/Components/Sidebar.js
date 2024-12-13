import hoodie from "../hoodie.jpeg";
import { useNavigate } from "react-router-dom";
function Sidebar() {
   const navigate=useNavigate()
  return (
    <div className="w-[30%] h-full">
      
      <div className=" w-full h-[90%] border-r-2 text-xl flex  flex-col  border-[#727588]">
        <div className=" gap-2 w-full flex flex-col justify-center items-center h-[40%]  ">
          <img src={hoodie} className="w-16 h-16 rounded-full" />
          <span className="text-xl font-semibold text-white">
            Sofia Havertz
          </span>
        </div>
        <div className="w-full h-3/5  text-white flex flex-col justify-between">
          <span className=" cursor-pointer w-full text-center ">Account</span>
          <span className=" cursor-pointer w-full text-center" onClick={(e)=>{
            e.preventDefault()
            navigate("/accountPart")

          }}>Address</span>
          <span className=" cursor-pointer w-full text-center"
          onClick={(e)=>{
            e.preventDefault()
            navigate("/accountPart/order")
          }}
          >Orders</span>
          <span className=" cursor-pointer w-full text-center">WishList</span>
          <span className=" cursor-pointer w-full text-center">LogOut</span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
