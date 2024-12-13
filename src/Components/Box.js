import { AiOutlineThunderbolt } from "react-icons/ai";

function Box({ rice, Compon }) {
  return (
    <div className="text-xl  h-44 w-52 flex flex-col items-center justify-center bg-[#121737] rounded-md">
      <div className="flex justify-start w-full pl-4">
        {Compon && <Compon className="text-2xl mt-2 bg-[#202543] rounded-md" />}
      </div>

      <div>
        <span className="text-sm">Anything just for testing purpose only </span>
        <span className="text-sm text-[#42455F]">
          anything is written inside this
        </span>
      </div>

      <div className="text-[#838596] underline w-full ">
        <div className="mr-1 inline-flex items-center">
          <span className="underline text-sm">{rice}</span>
          <AiOutlineThunderbolt className="ml-1" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Box;
