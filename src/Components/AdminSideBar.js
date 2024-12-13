import { useState } from "react";
import { GoHome } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import NavComponent from "./NavComponent";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiGift } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import {useNavigate} from "react-router-dom"
function AdminSideBar() {
  const navigate=useNavigate()
  const [index, setIndex] = useState(0);

  return (
    <div className="w-[8vw] bg-[#03082A] h-screen fixed top-0 left-0">
      <div onClick={(e)=>{
        e.preventDefault()
        navigate("/main")
      }} className="font-semibold text-lg w-full flex cursor-pointer justify-center p-4">
        <span className="text-[#F19E38]">Supa</span>
        <span className="text-white">Sync</span>
      </div>

      <div className="text-black w-full mt-10 items-center flex flex-col">
        <NavComponent
          Destination={"/Ecomm"}
          NavComp={GoHome}
          inde={index}
          value={0}
          funct={setIndex}
        />

        <NavComponent
           Destination={"/Sales"}
          NavComp={FaNewspaper}
          inde={index}
          value={1}
          funct={setIndex}
        />
        <NavComponent
          NavComp={IoBagCheckOutline}
          inde={index}
          value={2}
          funct={setIndex}
        />
        <NavComponent
          NavComp={CiUser}
          inde={index}
          value={3}
          funct={setIndex}
        />
        <NavComponent
          NavComp={HiOutlineArrowTrendingUp}
          inde={index}
          value={4}
          funct={setIndex}
        />
        <NavComponent
          NavComp={HiMagnifyingGlass}
          inde={index}
          value={5}
          funct={setIndex}
        />
        <NavComponent
          NavComp={CiGift}
          inde={index}
          value={6}
          funct={setIndex}
        />

        <NavComponent
          NavComp={IoPhonePortraitOutline}
          inde={index}
          value={7}
          funct={setIndex}
        />
      </div>
    </div>
  );
}

export default AdminSideBar;
