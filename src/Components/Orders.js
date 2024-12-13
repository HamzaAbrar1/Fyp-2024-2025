
import Line from "./Line.js"
function Orders() {
  return (
    <div className="w-[70%] ">
     
      <div className="pl-[7%] w-full">
        <div className="text-white text-xl font-semibold">Orders History </div>

        <div className=" w-full mt-6">
            <Line  NumberID={"Number ID"} Dates={"Dates"} Status={"Status"} Price={"Price"} />
            <Line NumberID={"#4567-768"} Dates={"October 17"} Status={"Delivered"} Price={"12345$"}/>
            <Line NumberID={"#4567-768"} Dates={"October 17"} Status={"Delivered"} Price={"12345$"}/>
            <Line NumberID={"#4567-768"} Dates={"October 17"} Status={"Delivered"} Price={"12345$"}/>
            <Line NumberID={"#4567-768"} Dates={"October 17"} Status={"Delivered"} Price={"12345$"}/>
        </div>

      </div>
    </div>
  );
}

export default Orders;
