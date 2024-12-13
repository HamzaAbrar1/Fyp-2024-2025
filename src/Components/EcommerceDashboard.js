import AdminSideBar from "./AdminSideBar.js";
import Bar1 from "./Bar1.js";
import DashboardLine from "./DashboardLine.js";
import RevenueBox from "./RevenueBox.js";
import RightOfBar from "./RightOfBar.js";
import Hoodie from "../hoodie.jpeg";
import RevenueBox1 from "./Revenuebox1.js";
import DashboardLine1 from "./DashboardLine1.js";
function EcommerceDashboard() {
  return (
    <div className="bg-gradient-to-r from-[#080F3D] to-[#203198] relative w-screen flex">
      <AdminSideBar className="fixed top-0 left-0" />
      <div className="AllContent w-[84vw] border-2 border-red-800 ml-[10vw]  m-[2vw]">
        <div className="w-full flex justify-between">
          <span className="text-white text-md">Dashboard</span>
          <span className="bg-white flex justify-center items-center text-black p-2 cursor-pointer">
            Jan 01 - Jan 28
          </span>
        </div>

        <div className="w-full mt-5 flex justify-between ">
          <RevenueBox name={"revenue"} value={"$7501"} sign={"+"} value1={22} />
          <RevenueBox name={"Orders"} value={"920"} sign={"+"} value1={26} />
          <RevenueBox
            name={"Visitors"}
            value={"15.5k"}
            sign={"+"}
            value1={49}
          />
          <RevenueBox
            name={"Conversion"}
            value={"28%"}
            sign={"+"}
            value1={1.9}
          />
        </div>

        <div className=" w-full flex justify-between mt-8">
          <div className="relative w-[77%] border-2 border-[#E1E2E6] rounded-md p-2 pt-20">
            <div className="w-[90%] absolute left-[8px] top-[8px] text-[#E1E2E6] flex justify-between ">
              <span className="text-base">Dashboard</span>
              <span className="text-sm cursor-pointer">Advanced Report</span>
            </div>
            <Bar1 className="" />
          </div>
          <div className="w-1/5 border-2 border-[#E1E2E6] rounded-md ">
            <RightOfBar />
          </div>
        </div>
        <div className="w-full flex justify-between mt-8">
          <div className="w-[48%] border-2 border-red-600">rice</div>
          <div className="w-[48%] border-2 border-red-600">rice</div>
        </div>
        <div className="w-full flex justify-between mt-8">
          <div className="w-[48%] border-2 border-[#E1E2E6] rounded-md p-3">
            <div className="w-full flex justify-between  text-[#E1E2E6]">
              <span className="text-xl">BestSellers</span>
              <span className="text-base cursor-pointer">More</span>
            </div>

            <div className="w-full flex  text-base text-[#727588] mt-9">
              <div className="w-3/6 text-[#727588]">Product</div>
              <div className="w-3/6 flex justify-between text-[#727588]">
                <span>Price</span>
                <span>Sold</span>
                <span>Product</span>
              </div>
            </div>
            <DashboardLine image={Hoodie} value={"Deco accessory"} />
            <DashboardLine image={Hoodie} value={"Deco accessory"} />
            <DashboardLine image={Hoodie} value={"Deco accessory"} />
            <DashboardLine image={Hoodie} value={"Deco accessory"} />
          </div>
          <div className="w-[48%] border-2 border-[#E1E2E6] rounded-md p-5 py-10">
            <div className="w-full flex justify-between  text-[#E1E2E6]">
              <span className="text-xl">Sales Forecast</span>
              <span className="text-base cursor-pointer">More</span>
            </div>

            <div className="w-full mt-10 flex justify-between">
              <RevenueBox1
                name={"Revenue"}
                value={"Profit"}
                sign={"+"}
                value1={"22.8"}
              />
              <RevenueBox1
                name={"Net Profit"}
                value={"Value"}
                sign={"-"}
                value1={"2.5"}
              />
            </div>
            <div className="w-full mt-10 flex justify-between">
              <RevenueBox1
                name={"Orders"}
                value={"val"}
                sign={"+"}
                value1={"32.8"}
              />
              <RevenueBox1
                name={"Visitors"}
                value={"Value"}
                sign={"+"}
                value1={"60"}
              />
            </div>
          </div>
        </div>

        <div className="w-full p-2 border-2 border-[#E1E2E6] mt-8">
          <div className="w-full flex justify-between  text-[#E1E2E6]">
            <span className="text-xl">Latest Orders</span>
            <span className="text-base cursor-pointer">More</span>
          </div>

          <div className="w-full px-4 border-b text-[#727588] border-[#E1E2E6]  text-base flex mt-20">
            <div className="font-semibold  w-[20vw] p-3 flex items-center">
              Products
            </div>
            <div className="flex justify-between ">
              <div className="w-[10vw] h-full flex items-center">Qty</div>
              <div className="w-[10vw] h-full flex items-center">Date</div>
              <div className="w-[10vw]  h-full flex items-center">Revenue</div>
              <div className="w-[10vw] h-full flex items-center">
                Net Profit
              </div>
              <div className="w-[10vw] h-full flex items-center">Status</div>
              <div className="w-[10vw] h-full flex items-center">Actions</div>
            </div>
          </div>
          <DashboardLine1
            image={Hoodie}
            name={"Analog Table Clock"}
            value={"x2"}
            date={"Feb 5,2024"}
            revenue={"$260"}
            profit={"60$"}
            status={"pending"}
          />
          <DashboardLine1
            image={Hoodie}
            name={"Analog Table Clock"}
            value={"x2"}
            date={"Feb 5,2024"}
            revenue={"$260"}
            profit={"60$"}
            status={"refund"}
          />
          <DashboardLine1
            image={Hoodie}
            name={"Analog Table Clock"}
            value={"x2"}
            date={"Feb 5,2024"}
            revenue={"$260"}
            profit={"60$"}
            status={"Complete"}
          />

<DashboardLine1
            image={Hoodie}
            name={"Analog Table Clock"}
            value={"x2"}
            date={"Feb 5,2024"}
            revenue={"$260"}
            profit={"60$"}
            status={"pending"}
          />
          <DashboardLine1
            image={Hoodie}
            name={"Analog Table Clock"}
            value={"x2"}
            date={"Feb 5,2024"}
            revenue={"$260"}
            profit={"60$"}
            status={"refund"}
          />
          <DashboardLine1
            image={Hoodie}
            name={"Analog Table Clock"}
            value={"x2"}
            date={"Feb 5,2024"}
            revenue={"$260"}
            profit={"60$"}
            status={"Complete"}
          />
               <DashboardLine1
            image={Hoodie}
            name={"Analog Table Clock"}
            value={"x2"}
            date={"Feb 5,2024"}
            revenue={"$260"}
            profit={"60$"}
            status={"pending"}
          />
          <DashboardLine1
            image={Hoodie}
            name={"Analog Table Clock"}
            value={"x2"}
            date={"Feb 5,2024"}
            revenue={"$260"}
            profit={"60$"}
            status={"refund"}
          />
          <DashboardLine1
            image={Hoodie}
            name={"Analog Table Clock"}
            value={"x2"}
            date={"Feb 5,2024"}
            revenue={"$260"}
            profit={"60$"}
            status={"Complete"}
          />
              <DashboardLine1
            image={Hoodie}
            name={"Analog Table Clock"}
            value={"x2"}
            date={"Feb 5,2024"}
            revenue={"$260"}
            profit={"60$"}
            status={"Complete"}
          />
        </div>
      </div>
    </div>
  );
}

export default EcommerceDashboard;
