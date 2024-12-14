import AdminFirstComponent from "./AdminSideComponents/AdminFirstBox.js";
import LineBox from "./AdminSideComponents/LineBox.js";
import LineBoxInventory from "./AdminSideComponents/LineBoxInventory.js";
import Hoodie from "./hoodie.jpeg";
function AdminSideComponents() {
  return (
    <div className="w-[76vw] border-2 border-red-600 ml-[12vw]">
      <div className="rightbox w-[30%] ">
        <AdminFirstComponent
          initial={"Product A : Rising in in Demand !"}
          forecast={"Forecasted Increase"}
          value={"+32.8%"}
        />
        <AdminFirstComponent
          initial={"Product B : falling in in Demand !"}
          forecast={"Forecasted Decrease"}
          value={"-30.0%"}
        />
        <AdminFirstComponent
          initial={"Product B : will be Restocked in 2 days !"}
          forecast={"Replenishment Quantity"}
          value={"x24"}
        />
      </div>

      <div className="leftbox mt-2 w-full">
        <div className="w-[30%] border-2 rounded-md text-[#E1E2E6] p-2 text-[9px]">
          <div className="text-[12px] text-[#E1E2E6]">
            Quantity Restock-Recommendations
          </div>
          <div className="w-full flex mt-3 text-[#667A8A]">
            <div className="w-[40%]">Product</div>
            <div className="w-[60%] flex justify-between">
              <span>Quantity</span>
              <span>Increase</span>
              <span>Restock</span>
            </div>
          </div>

          <LineBox
            name={"Deco accessory"}
            Quantity={"x15"}
            Increase={"+40%"}
            image={Hoodie}
          />
          <LineBox
            name={"Deco accessory"}
            Quantity={"x15"}
            Increase={"+40%"}
            image={Hoodie}
          />
          <LineBox
            name={"Deco accessory"}
            Quantity={"x15"}
            Increase={"+40%"}
            image={Hoodie}
          />
          <LineBox
            name={"Deco accessory"}
            Quantity={"x15"}
            Increase={"+40%"}
            image={Hoodie}
          />
          <LineBox
            name={"Deco accessory"}
            Quantity={"x15"}
            Increase={"+40%"}
            image={Hoodie}
          />
          <LineBox
            name={"Deco accessory"}
            Quantity={"x15"}
            Increase={"+40%"}
            image={Hoodie}
          />
        </div>
      </div>

      <div className="central box w-full">
        {/* Inventory code */}
        <div className="left side w-[70%] border-2 rounded-md mt-2 border-[#E1E2E6] text-[#E1E2E6] text-[9px] p-1 pt-2">
          <div className="text-12px">Invetory</div>
          <div className="w-full text-[#727588] border-b-2 border-[#727588] pb-1 flex mt-5">
            <div className="ml-[2%] w-[21%]">Products</div>
            <div className="w-[75%] mr-[2%] flex justify-between">
              <span className="w-[14%] flex justify-start" >Qty</span>
              <span className="w-[14%] flex justify-start">Last Restocked</span>
              <span className="w-[14%] flex justify-start">Unit Price</span>
              <span className="w-[14%] flex justify-start">Net Profit</span>
              <span className="w-[14%] flex justify-start" >Status</span>
              <span className="w-[14%] flex justify-start" >Actions</span>
              <span className="w-[14%] flex justify-start">Restock</span>
            </div>
          </div>
          <LineBoxInventory
            name={"Analog table clock"}
            image={Hoodie}
            Qty={"x2"}
            LastRestocked={"Feb 5,2024"}
            UnitPrice={"$600"}
            NetProfit={"$60.75"}
            Status={"Under-Stock"}
            Actions={"rice"}
            Restock={"Request"}
          />
          <LineBoxInventory
            name={"Analog table clock"}
            image={Hoodie}
            Qty={"x2"}
            LastRestocked={"Feb 5,2024"}
            UnitPrice={"$600"}
            NetProfit={"$60.75"}
            Status={"Over-Stock"}
            Actions={"rice"}
            Restock={"Request"}
          />
          <LineBoxInventory
            name={"Analog table clock"}
            image={Hoodie}
            Qty={"x2"}
            LastRestocked={"Feb 5,2024"}
            UnitPrice={"$600"}
            NetProfit={"$60.75"}
            Status={"Balanced"}
            Actions={"rice"}
            Restock={"Request"}
          />
          <LineBoxInventory
            name={"Analog table clock"}
            image={Hoodie}
            Qty={"x2"}
            LastRestocked={"Feb 5,2024"}
            UnitPrice={"$600"}
            NetProfit={"$60.75"}
            Status={"Normal"}
            Actions={"rice"}
            Restock={"Request"}
          />
          <LineBoxInventory
            name={"Analog table clock"}
            image={Hoodie}
            Qty={"x2"}
            LastRestocked={"Feb 5,2024"}
            UnitPrice={"$600"}
            NetProfit={"$60.75"}
            Status={"Under-Stock"}
            Actions={"rice"}
            Restock={"Request"}
          />
          <LineBoxInventory
            name={"Analog table clock"}
            image={Hoodie}
            Qty={"x2"}
            LastRestocked={"Feb 5,2024"}
            UnitPrice={"$600"}
            NetProfit={"$60.75"}
            Status={"Over-Stock"}
            Actions={"rice"}
            Restock={"Request"}
          />
          <LineBoxInventory
            name={"Analog table clock"}
            image={Hoodie}
            Qty={"x2"}
            LastRestocked={"Feb 5,2024"}
            UnitPrice={"$600"}
            NetProfit={"$60.75"}
            Status={"Balanced"}
            Actions={"rice"}
            Restock={"Request"}
          />
          <LineBoxInventory
            name={"Analog table clock"}
            image={Hoodie}
            Qty={"x2"}
            LastRestocked={"Feb 5,2024"}
            UnitPrice={"$600"}
            NetProfit={"$60.75"}
            Status={"Normal"}
            Actions={"rice"}
            Restock={"Request"}
          />
          <LineBoxInventory
            name={"Analog table clock"}
            image={Hoodie}
            Qty={"x2"}
            LastRestocked={"Feb 5,2024"}
            UnitPrice={"$600"}
            NetProfit={"$60.75"}
            Status={"Balanced"}
            Actions={"rice"}
            Restock={"Request"}
          />
          <LineBoxInventory
            name={"Analog table clock"}
            image={Hoodie}
            Qty={"x2"}
            LastRestocked={"Feb 5,2024"}
            UnitPrice={"$600"}
            NetProfit={"$60.75"}
            Status={"Normal"}
            Actions={"rice"}
            Restock={"Request"}
          />
        </div>
      </div>
    </div>
  );
}
export default AdminSideComponents;
