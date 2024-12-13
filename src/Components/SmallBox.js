import { CiEdit } from "react-icons/ci";
import { useState } from "react";
function SmallBox({ address, name, phone, location }) {
  const [change, setChange] = useState(false);
  return (
    <div className="border rounded-md border-[#727588] w-[48%] p-2">
      <div className="w-full flex justify-between">
        <span className="text-base">{address}</span>
        <span
          onClick={(e) => {
            e.preventDefault();
            setChange(!change);
          }}
          className="flex gap-1 text-[#727588] cursor-pointer"
        >
          <CiEdit /> <span className="text-base">Edsit</span>
        </span>
      </div>
      {!change ? (
        <div className="text-base text-[#727588] mt-2">{name}</div>
      ) : (
        <input
          type="text"
          placeholder={`${name}`}
          className="text-base text-[#727588] mt-2 bg-transparent fo outline-none"
        />
      )}

      {!change ? (
        <div className="text-base text-[#727588] mt-2">{phone}</div>
      ) : (
        <input
          type="text"
          placeholder={`${phone}`}
          className="text-base text-[#727588] mt-2 bg-transparent fo outline-none"
        />
      )}
      {!change ? (
        <div className="text-base text-[#727588] mt-2">{location}</div>
      ) : (
        <input
          type="text"
          placeholder={`${location}`}
          className="text-base text-[#727588] mt-2 bg-transparent fo outline-none w-full"
        />
      )}
    </div>
  );
}

export default SmallBox;
