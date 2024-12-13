function DashboardLine({ image, value }) {
  return (
    <div className="w-full text-[#727588] mt-5 text-base border-b border-[#E1E2E6] flex">
      <div className="w-3/6  flex gap-2 p-2">
        <img src={image} className="w-10 h-10 rounded-full " />
        <div className="flex h-full items-center">{value}</div>
      </div>
      <div className="w-3/6 flex justify-between items-center">
        <span>$21.19</span>

        <span>409</span>

        <span>$1882</span>
      </div>
    </div>
  );
}
export default DashboardLine;
