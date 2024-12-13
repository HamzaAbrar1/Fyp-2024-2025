function RightOfBar() {
  return (
    <div className="p-5 py-14">
      <div className="w-full flex justify-between">
        <div className="text-xl text-[#E1E2E6] font-semibold">Cart</div>
        <div className="flex justify-center items-center w-10 h-10 rounded-full text-[#E1E2E6] border border-[#E1E2E6]">
          <div>!</div>
        </div>
      </div>

<div className="w-full mt-6 flex justify-center">
    <div className="w-[30vh] h-[30vh] bg-white rounded-full  flex justify-center items-center text-xl text-black font-semibold   ">
        38%
    </div>
</div>


<div className="w-full mt-10 flex justify-between">
    <span className="text-[#E1E2E6] text-lg">
    Adandoned Cart
    </span>
    <span className="text-[#E1E2E6] text-lg">
    720
    </span>
</div>
<div className="w-full mt-5 flex justify-between">
    <span className="text-[#727588] text-lg">
    Adandoned Revenue
    </span>
    <span className="text-[#727588] text-lg">
    %5900
    </span>
</div>

    </div>
  );
}
export default RightOfBar;
