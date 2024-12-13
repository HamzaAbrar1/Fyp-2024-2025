import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { CiMicrophoneOn } from "react-icons/ci";
import Icon from "./Icon.png";
// import Box from "./Components/Box.js";
import Box from "./Components/Box.js";
import { CiDumbbell } from "react-icons/ci";
import { PiHeadphonesThin } from "react-icons/pi";
import { CiLight } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { GoFileMedia } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdApps } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function App() {
  const { name } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center text-3xl bg-[#03082A] text-white text-center relative">
      <div
        className={`Navbar h-screen ${
          open ? "w-64" : "w-10"
        } duration-500  z-10 bg-[#031C30] absolute left-0 `}
      >
        <FiAlignJustify
          onClick={() => {
            setOpen(!open);
          }}
          className={` absolute ${
            open ? "-right-0 rotate-90" : "rotate-0 right-2"
          }  transition-all cursor-pointer duration-500`}
        />

        <div
          className={`h-[75%] w-[80%]   ${
            open ? "scale-100" : "scale-0"
          } duration-500 mt-[5%] ml-[5%] relative`}
        >
          <p
            className={`${
              open ? "rotate-[360deg]" : ""
            } duration-500 text-[#5D7285] text-2xl`}
          >
            SupaSync
          </p>

          <div className=" h-[75%] mt-[15%] border-black relative flex flex-col justify-between items-start">
            <div className="flex items-center text-[#727588] text-sm cursor-pointer ">
              <MdHomeFilled className="w-6  h-6 bg-transparent" />
              <div >Dashboard</div>
            </div>

            <div className="flex items-center text-[#727588] text-sm cursor-pointer gap-1 ">
              <GoFileMedia className="w-6  h-6 bg-transparent" />
              <div>Media</div>
            </div>

            <div className="flex items-center text-[#727588] text-sm cursor-pointer gap-1 ">
              <IoNewspaperOutline className="w-6  h-6 bg-transparent" />
              <div>Pages</div>
            </div>
            <div className="flex items-center text-[#727588] text-sm cursor-pointer gap-1 ">
              <MdApps className="w-6  h-6 bg-transparent" />
              <div>Appearances</div>
            </div>

            <div className="flex items-center text-[#727588] text-sm cursor-pointer gap-1 ">
              <FaShoppingBag className="w-6  h-6 bg-transparent" />
              <div>Plugins</div>
            </div>

            <div className="flex items-center text-[#727588] text-sm cursor-pointer gap-1 ">
              <PiUsersThreeFill className="w-6  h-6 bg-transparent" />
              <div>User</div>
            </div>

            <div className="flex items-center text-[#727588] text-sm cursor-pointer gap-1 ">
              <CiSettings className="w-6  h-6 bg-transparent" />
              <div>Settings</div>
            </div>

            <div className="flex items-center text-[#727588] text-sm cursor-pointer gap-1 ">
              <FaTools className="w-6  h-6 bg-transparent" />
              <div>Tools</div>
            </div>
          </div>
        </div>

        <div
          className={`mt-[6%] ${
            open ? "scale-100" : "scale-0"
          } h-[20%] w-full  duration-500 py-2 flex flex-col justify-between`}
        >
          <div className="w-full h-2/5  flex gap-1 justify-center">
            <FaUser className=" w-8 h-8 bg-transparent text-white" />
            <div className="text-lg text-white">Hamza Abrar</div>
          </div>
          <div className="w-[60%]-2/5 cursor-pointer  flex p-2 rounded-md bg-[#667A8A]">
            <IoLogOutOutline className=" w-8 h-8 bg-transparent text-white" />
            <div className="text-lg">LogOut</div>
          </div>
        </div>
      </div>

      <div className="w-screen h-[70%]  flex items-end relative top-[12%]">
        <div className="h-[100%]  w-full">
          <div className=" h-full w-[70%] ml-[15%] flex flex-col justify-between">
            <div className="item flex justify-center">
              <div className="text-center text-4xl w-[60%] bg-gradient-to-r from-orange-500 to-indigo-600 bg-clip-text text-transparent font-semibold">
                Find the perfect product for every need
              </div>
            </div>
            <div className="item flex justify-center">
              <div className="text-[#868999] font-light w-[60%] text-xl">
                Describe what you are looking for and AI will find the best
                match for you
              </div>
            </div>

            <div className="item flex justify-center">
              <div className="rounded-2xl bg-white w-[60%] text-black flex">
                <img src={Icon} className="rounded-l-2xl h-10 w-10 ml-2 " />
                <input
                  type="text"
                  placeholder="I am looking for....."
                  className="ml-2% text-lg w-[85%] focus:outline-none"
                />
                <CiMicrophoneOn
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/LLM");
                  }}
                  className="mt-1 cursor-pointer"
                />
              </div>
            </div>

            <div className="item text-[#494D66] text-xl">you may ask</div>
            <div className="item w-full flex justify-around">
              <Box rice="Ask this" Compon={PiHeadphonesThin} />
              <Box rice="Ask this" Compon={CiDumbbell} />
              <Box rice="Ask this" Compon={CiLight} />
              <Box rice="Ask this" Compon={MdOutlineFoodBank} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
