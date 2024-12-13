import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import Sidebar from "../Components/Sidebar.js";
function Layout3() {
  return (
    <div className=" w-[94%] ml-[3%] mt-[2%]">
      <Navbar />
      <div className="w-full text-5xl mt-10  bg-gradient-to-r from-orange-500 to-indigo-600 bg-clip-text text-transparent font-semibold flex justify-center items-center">
        My Account
      </div>
      <div className="wrapper mt-10 w-full h-[65vh]  flex gap-2">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
export default Layout3;
