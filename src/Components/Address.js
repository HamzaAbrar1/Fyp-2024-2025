import SmallBox from "./SmallBox.js";

function Address() {
  return (
    <div className="w-[70%] ">
      <div className="pl-[7%] w-full">
        <div className="text-white text-xl font-semibold">Address </div>
        <div className="text-white text-xl font-semibold mt-1 flex justify-between">
          <SmallBox
            address={"Billing Address"}
            name="Sofia Havertz"
            phone="+9234341432"
            location={"Comsat lahore,defence road raiwind"}
          />

          <SmallBox
            address={"Billing Address"}
            name="Sofia Havertz"
            phone="+9234341432"
            location={"Comsat lahore,defence road raiwind"}
          />
        </div>
      </div>
    </div>
  );
}

export default Address;
