import { useState } from "react";
import Navbar from "./Components/Navbar.js";
import { NavLink } from "react-router-dom";
import Hoodie from "./hoodie.jpeg";
function Cart() {
  const [state, setState] = useState(0);
  return (
    <div className="p-5">
      <Navbar />

      <p className="text-5xl  bg-gradient-to-r from-orange-500 to-indigo-600 bg-clip-text text-transparent font-semibold inline-block w-full text-center p-5">
        Cart
      </p>
      <div className="w-full flex justify-center gap-3 p-5">
        <NavLink
          to="/Cart"
          className={({ isActive }) =>
            `w-1/5 ${
              isActive ? "border-b-2 border-white" : ""
            } flex gap-2 text-white p-2`
          }
        >
          <div
            className={`w-8 h-8 rounded-full bg-white flex justify-center items-center text-sm
                text-black
            `}
          >
            1{/* You can also add more content here if necessary */}
          </div>
          <span>Shipping Cart</span>
        </NavLink>

        <NavLink
          to="/Cart/CheckOut"
          className={({ isActive }) =>
            `
          w-1/5
    ${isActive ? "border-b-2 border-white" : "  "}
flex gap-2 text-white p-2
    `
          }
        >
          <div
            className="w-8 h-8 rounded-full bg-white flex justify-center items-center text-sm
                text-black"
          >
            {/* You can also add more content here if necessary */}2
          </div>
          <span>CheckOut Details</span>
        </NavLink>
        <NavLink
          to="/Cart/Order"
          className={({ isActive }) =>
            `
          w-1/5
    ${isActive ? "border-b-2 border-white" : "  "}
flex gap-2 text-white p-2
    `
          }
        >
          <div
            className="w-8 h-8 rounded-full bg-white flex justify-center items-center text-sm
                text-black"
          >
            {/* You can also add more content here if necessary */}3
          </div>
          <span>Order Complete</span>
        </NavLink>
      </div>

      <div className="w-[80%] ml-[10%]  flex   justify-between ">
        <div className=" w-[65%]  mr-[5%]">
          <div className="text-[#E1E2E6] w-full flex py-3  border-b-2  border-[#727588]">
            <div className="w-3/6">Product</div>
            <div className="w-3/6 flex justify-between">
              <span>Quantity</span>
              <span>Price</span>
              <span>Subtotal</span>
            </div>
          </div>

          <div className="w-full flex py-3 border-b-2 border-[#727588]">
            <div className="w-3/6">
              <div className="w-3/6 h-full py-1 flex gap-2">
                <img src={Hoodie} className="w-11 h-[52px]"></img>
                <div className="flex flex-col justify-around text-[10px]">
                  <span className=" text-[#E1E2E6]">Trey Table</span>
                  <span className="text-[#727588]">color Red</span>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      let elem =
                        e.currentTarget.parentElement.parentElement
                          .parentElement.parentElement;
                      elem.remove();
                    }}
                    className="text-[#727588] cursor-pointer"
                  >
                    X remove
                  </span>
                </div>
              </div>
            </div>

            <div className="w-3/6 h-full pt-3 text-[#E1E2E6] flex justify-between items-center">
              <div
                className="
                text-white w-20 px-2 border border-[#727588] rounded-md  flex justify-between"
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

              <div>$19.00</div>
              <div>%38.00</div>
            </div>
          </div>
          <div className="w-full flex py-3 border-b-2 border-[#727588]">
            <div className="w-3/6">
              <div className="w-3/6 h-full py-1 flex gap-2">
                <img src={Hoodie} className="w-11 h-[52px]"></img>
                <div className="flex flex-col justify-around text-[10px]">
                  <span className=" text-[#E1E2E6]">Trey Table</span>
                  <span className="text-[#727588]">color Red</span>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      let elem =
                        e.currentTarget.parentElement.parentElement
                          .parentElement.parentElement;
                      elem.remove();
                    }}
                    className="text-[#727588] cursor-pointer"
                  >
                    X remove
                  </span>
                </div>
              </div>
            </div>

            <div className="w-3/6 h-full pt-3 text-[#E1E2E6] flex justify-between items-center">
              <div
                className="
                text-white w-20 px-2 border border-[#727588] rounded-md  flex justify-between"
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

              <div>$19.00</div>
              <div>%38.00</div>
            </div>
          </div>
        </div>
        <div className="w-[30%] ">
          <div className=" m-[2%] w-[100%]  px-[10px] border border-[#727588] rounded-md">
            <div className="text-[#E1E2E6] text-center w-full p-2">
              Cart Summary
            </div>
            {/* this is the option section */}
            <div className=" w-full mt-1">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setState(0);
                }}
                className={` flex justify-between
                        ${
                          state == 0
                            ? "text-black bg-gray-600 font-semibold "
                            : " text-[#E1E2E6] bg-transparent"
                        }
                        cursor-pointer
                        pl-6 py-3 pr-1
                        relative
                        border border-gray-600
                        `}
              >
                {state == 0 ? (
                  <div className="absolute left-1 top-4 w-4 h-4 border border-black bg-transparent rounded-full flex justify-center items-center">
                    <div className="w-3 h-3 rounded-full bg-black"> </div>
                  </div>
                ) : null}

                <span>Free shipping</span>
                <span>$0.0.0</span>
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  setState(1);
                }}
                className={` flex justify-between
                        ${
                          state == 1
                            ? "text-black bg-gray-600 font-semibold "
                            : " text-[#E1E2E6] bg-transparent"
                        }
                        cursor-pointer
                        pl-6 py-3 pr-1
                        relative
                        mt-2
                        border border-gray-600
                        `}
              >
                {state == 1 ? (
                  <div className="absolute left-1 top-4 w-4 h-4 border border-black bg-transparent rounded-full flex justify-center items-center">
                    <div className="w-3 h-3 rounded-full bg-black"> </div>
                  </div>
                ) : null}

                <span>Express shipping</span>
                <span>$0.0.0</span>
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  setState(2);
                }}
                className={` flex justify-between
                        ${
                          state == 2
                            ? "text-black bg-gray-600 font-semibold "
                            : " text-[#E1E2E6] bg-transparent"
                        }
                        cursor-pointer
                        pl-6 py-3 pr-1
                        relative
                        mt-2
                        border border-gray-600
                        `}
              >
                {state == 2 ? (
                  <div className="absolute left-1 top-4 w-4 h-4 border border-black bg-transparent rounded-full flex justify-center items-center">
                    <div className="w-3 h-3 rounded-full bg-black"> </div>
                  </div>
                ) : null}

                <span>Pick Up </span>
                <span>$100.0.0</span>
              </div>
            </div>

            <div className="w-full flex justify-between py-3 border-b border-[#E1E2E6]">
              <span className="text-[#8d90a0] font-semibold">Subtotal</span>

              <span className="text-[#E1E2E6]">$1234.0</span>
            </div>
            <div className="w-full flex justify-between py-3 mt-1">
              <span className="text-[#E1E2E6] font-semibold">Total</span>

              <span className="text-[#E1E2E6]">$20000.0</span>
            </div>

            <div className="w-full my-2 font-semibold rounded-md py-3 text-black flex justify-center items-center cursor-pointer bg-blue-700">
              CheckOut
            </div>
          </div>
        </div>
      </div>

      <div className="ml-[10%] mt-8 py-3">
        <div className="text-[#E1E2E6] text-md">Have a Coupon</div>
        <div className="mt-2 text-[#727588] text-sm">
          Add your code for an instant cart discount
        </div>
        <div className=" relative">
        <input
          type="text"
          className="bg-transparent p-1 text-[#727588] border border-[#727588] mt-1 focus:outline-none"
          placeholder="Coupon Code"
        />
        
        </div>
        <div className="p-2 bg-blue-600 flex justify-center items-center cursor-pointer w-[10vw] mt-2 rounded-md">
            Apply
        </div>
      </div>
    </div>
  );
}

export default Cart;
