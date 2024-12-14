import AdminFirstComponent from "./AdminSideComponents/AdminFirstBox.js"

function AdminSideComponents(){

    return(
        <div className="w-[76vw] border-2 border-red-600 ml-[12vw]">
            <div className="rightbox w-[30%] ">
                <AdminFirstComponent initial={"Product A : Rising in in Demand !"} forecast={"Forecasted Increase"} value={"+32.8%"}/>
                <AdminFirstComponent initial={"Product B : falling in in Demand !"} forecast={"Forecasted Decrease"} value={"-30.0%"}/>
                <AdminFirstComponent initial={"Product B : will be Restocked in 2 days !"} forecast={"Replenishment Quantity"} value={"x24"}/>
            </div>
        
            <div className="leftbox">

            </div>
        
        </div>
    )
  
}
export default AdminSideComponents