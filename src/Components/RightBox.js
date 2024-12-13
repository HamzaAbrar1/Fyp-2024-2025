import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
function RightBox() {
  return (
    <div className="leftBox h-full w-[48%]  ml-[2%] text-white ">
      <div className="h-[78vh] w-full  border-b-2 border-[#717384] mt-[6%]">
        <p className="text-4xl font-semibold">
          Plaid Sleeve Kangaroo Pocket Drawsting Hoodie
        </p>
        <div className=" mt-3 text-xl">
          <span className="text-white">BY </span>
          <span className=" text-[#1565C0]">H&M</span>
        </div>
        <div className="w-[50%] h-[8vh] flex gap-2 mt-[3%]">
          <div className="rounded-2xl bg-[#DFDFDF] w-14 flex justify-center items-center">
            <span className="text-base text-[#29B6F6]">$</span>
            <span className="text-2xl text-[#1565C0]">67</span>
          </div>
          <div className=" w-36">
            <p className="text-[#29B6F6] text-lg">Save 25%</p>
            <p className="text-[#7F7D7D] text-[12px]">
              Inclusive deal of the day
            </p>
          </div>
        </div>
        <p className="text-base w-[70%]  text-[#E1E2E6] mt-[3%]">
          It is long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout
        </p>

        <div className="w-full flex gap-2 mt-[8%]">
          <div
            className="
                 w-24 py-2 px-1  border border-[#727588] rounded-md bg-white text-black flex justify-between"
          >
            <span
              onClick={(e) => {
                e.preventDefault();
                let element = e.currentTarget.nextElementSibling;
                let value = Number(element.innerHTML);
                if (value >= 1) {
                  value = value - 1;
                  element.innerHTML = value;
                }
              }}
              className="cursor-pointer"
            >
              -
            </span>{" "}
            <span>2</span>{" "}
            <span
              onClick={(e) => {
                e.preventDefault();
                let element = e.currentTarget.previousElementSibling;
                let value = Number(element.innerHTML);
                value = value + 1;
                element.innerHTML = value;
              }}
              className="cursor-pointer"
            >
              +
            </span>
          </div>

            <div className="w-40 py-2 px-1 flex justify-center items-center text-[#E1E2E6] text-base cursor-pointer
            bg-[#1565C0] rounded-md              
            ">
WishList
            </div>
        </div>
        <div className="w-[56%] h-[10vh]  mt-[3%] flex justify-between">
        
          <div className="cursor-pointer h-full w-full bg-[#1565C0] rounded-xl flex justify-center items-center text-xl font-semibold">
            Add to Cart
          </div>
        </div>
      </div>
      <div className="  w-full h-[16vh] flex mt-3">
        <div className="w-[60%] h-full flex ">
          <CgProfile className="w-7 h-7 text-white bg-grey cursor-pointer" />
          <div className=" h-full w-[80%]  pl-2">
            <p className="font-semibold">ALex Morninstar</p>
            <p className=" text-[#29B6F6] font-semibold">
              contrary to popular beleif
            </p>
            <p className=" text-[#819394]">
              just checking therefor it is only testing text not proper
              generated text
            </p>
          </div>
        </div>
        <div className="w-40% h-full flex">
          <FaStar className=" w-6 h-6 text-[#1565C0]" />
          <FaStar className=" w-6 h-6 text-[#1565C0]" />
          <FaStar className=" w-6 h-6 text-[#1565C0]" />
          <FaStar className=" w-6 h-6 text-[#1565C0]" />
          <FaStar className=" w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
export default RightBox;
