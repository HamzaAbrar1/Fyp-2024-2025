import Navbar from "../Components/Navbar.js";
import LeftBox from "../Components/LeftBox.js";
import RightBox from "../Components/RightBox.js";
function Store1() {
  return (
    <div className="w-[92%] m-[2%]">
      <Navbar />

      <p className="text-5xl  bg-gradient-to-r from-orange-500 to-indigo-600 bg-clip-text text-transparent  w-[full] my-[3%]  font-semibold text-center ">
        Casual wear
      </p>
      <div className=" w-[80%] ml-[10%] mt-[2%]">
        <div className="outer mt-[1%] h-[83vh] w-full text-white flex">
          <LeftBox />
          <RightBox />
        </div>
      </div>
    </div>
  );
}

export default Store1;
