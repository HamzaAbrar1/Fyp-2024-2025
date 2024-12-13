import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="text-white w-full flex justify-between">
      <p
        className="text-3xl text-[#1565C0] font-bold cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          navigate("/main");
        }}
      >
        SupaSync
      </p>

      <div className="w-[40%]  flex justify-between text-2xl font-semibold">
        <div className="cursor-pointer">Sales</div>
        <div className="cursor-pointer">Electronics</div>
        <div className="cursor-pointer">Fashion</div>
        <div className="cursor-pointer">More</div>
      </div>

      <div className="flex justify-between w-[30%]">
        <div className="h-[80%] w-60 border border-white rounded-2xl flex relative">
          <CiSearch className="w-5 h-5 hover:cursor-pointer absolute top-1 left-1" />
          <input
            placeholder="Search..."
            className="text-sm text-white ml-[10%] w-[90%] bg-transparent focus:outline-none"
            type="text"
          />
        </div>
        {/* */}
        <CiShoppingCart
          onClick={(e) => {
            e.preventDefault();
            navigate("/Cart");
          }}
          className="text-blue w-7 h-7 cursor-pointer"
        />
        <CgProfile
          onClick={(e) => {
            e.preventDefault();
            navigate("/accountPart");
          }}
          className="w-7 h-7 text-white bg-grey cursor-pointer"
        />
      </div>
    </div>
  );
}
export default Navbar;
