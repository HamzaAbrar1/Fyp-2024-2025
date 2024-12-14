import AdminFirstComponent from "./AdminSideComponents/AdminFirstBox.js";
import LineBox from "./AdminSideComponents/LineBox.js";
import Hoodie from "./hoodie.jpeg"
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

      <div className="leftbox mt-2">
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
        
            <LineBox name={"Deco accessory"} Quantity={"x15"} Increase={"+40%"} image={Hoodie}/>
            <LineBox name={"Deco accessory"} Quantity={"x15"} Increase={"+40%"} image={Hoodie}/>
            <LineBox name={"Deco accessory"} Quantity={"x15"} Increase={"+40%"} image={Hoodie}/>
            <LineBox name={"Deco accessory"} Quantity={"x15"} Increase={"+40%"} image={Hoodie}/>
            <LineBox name={"Deco accessory"} Quantity={"x15"} Increase={"+40%"} image={Hoodie}/>
            <LineBox name={"Deco accessory"} Quantity={"x15"} Increase={"+40%"} image={Hoodie}/>
        </div>
      </div>
    </div>
  );
}
export default AdminSideComponents;
