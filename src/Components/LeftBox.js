import hoodie from "../hoodie.jpeg";
function LeftBox() {
  return (
    <div className="leftBox h-full w-[48%] mr-[2%] text-white ">
      
      <div className="w-full h-[60vh] mt-3 p-2 rounded-2xl ">
        <img src={hoodie} className="w-full h-full rounded-2xl" />
      </div>
      <div className=" w-full h-[16vh] px-2 flex justify-between">
        <img src={hoodie} className="w-24 h-24 rounded-2xl mt-2" />
        <img src={hoodie} className="w-24 h-24 rounded-2xl mt-2" />
        <img src={hoodie} className="w-24 h-24 rounded-2xl mt-2" />
      </div>
    </div>
  );
}
export default LeftBox;
