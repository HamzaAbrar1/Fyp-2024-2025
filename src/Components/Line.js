function Line({NumberID,Dates,Status,Price}) {
  return (
    <div className="text-[#727588] w-full border-b-2 border-[#727588] mb-8">
      <div className="w-5/6 flex justify-between text-base">
        <span>{NumberID}</span>
        <span>{Dates}</span>
        <span>{Status}</span>
        <span>{Price}</span>
      </div>
    </div>
  );
}
export default Line;
