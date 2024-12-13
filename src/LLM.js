import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";
import Icon from "./Icon.png";
import Card from "./Components/Card.js";

function LLM() {
  const [change, setChange] = useState(false);
  return (
    <div className=" mt-10 w-[60vw] ml-[20vw] h-full ">
 
      <div className="flex w-full justify-between bg-[#121737] rounded-md h-8 p-4 relative">
        <AiOutlineThunderbolt className="text-gray-600 bg-[#121737] absolute -left-12 w-8 h-8 rounded-full top-0 " />

        <div className="h-full flex justify-center items-center">
          {!change ? (
            <span className="text-base text-[#727588]">
              recommend the best products for every need
            </span>
          ) : (
            <input
              className=" text-[#727588] text-base bg-transparent w-96 focus:outline-none"
              type="text"
              placeholder="recommend the best products for every need"
            ></input>
          )}
        </div>
        <div className="flex justify-center items-center">
          <CiEdit
            className=" w-6 h-6 text-white cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setChange(!change);
            }}
          />
        </div>
      </div>
      <div className="flex w-full relative text-[#727588] text-base font-semibold mt-8">
        <img
          className=" absolute -left-12 top-0 w-8 h-8 rounded-full  bg-[#121737] "
          src={Icon}
        />
        For a productive workspace, I recommend investing in ergonomic and
        efficient office essentials. When it comes to home cooking, explore
        durable and multi-functional kitchen tools to make meal prep easier. For
        fitness enthusiasts, consider versatile and high-quality gear that
        supports various workout routines. To enhance your tech setup, choose
        gadgets that blend functionality with reliability for seamless usage.
        For travel lovers, invest in practical and durable accessories that
        simplify packing and on-the-go needs. When it comes to skincare, opt for
        products that balance effectiveness with gentle, everyday use. For pet
        owners, explore dependable and versatile supplies to keep your furry
        friends happy and healthy.
      </div>
      <div className="w-full mt-8 flex justify-between">
        <div className="text-[#b4b6be] text-base font-semibold">
          Suggested Products
        </div>
        <div className="flex gap-2">
          <FaAngleLeft className="text-[#727588] bg-[#121737] w-6 h-6 rounded-full cursor-pointer " />
          <FaAngleRight className="text-[#727588] bg-[#121737] w-6 h-6 rounded-full cursor-pointer" />
        </div>
      </div>
      <div className="w-full mt-8 flex justify-between ">
        <div className="flex gap-2">
          <div className="text-[#727588]  text-xl font-semibold">
            Filter applied
          </div>
          <div className="flex text-[#727588] p-2 gap-1 border-2 border-[#727588] rounded-3xl">
            <FaWindowClose
              onClick={(e) => {
                e.preventDefault();
                let element = e.currentTarget.parentElement;
                element.remove();
              }}
              className="cursor-pointer w-5 h-5 text-[#727588] bg-transparent text-xl rounded-full border-2 border-[#727588]"
            />
            <div>Sports</div>
          </div>
          <div className="flex text-[#727588] p-2 gap-1 border-2 border-[#727588] rounded-3xl">
            <FaWindowClose
              onClick={(e) => {
                e.preventDefault();
                let element = e.currentTarget.parentElement;
                element.remove();
              }}
              className="cursor-pointer w-5 h-5 text-[#727588] bg-transparent text-xl rounded-full border-2 border-[#727588]"
            />
            <div>SweetProot</div>
          </div>
        </div>
        <div className="flex text-[#727588] p-2 gap-1 border-2 border-[#727588] rounded-3xl">
          <div className="cursor-pointer">Select & Compare</div>
        </div>
      </div>
    
    <div className="w-full mt-8 flex gap-2 justify-between">
    
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        {/* </Card> */}
    </div>
    </div>
  );
}
export default LLM;
