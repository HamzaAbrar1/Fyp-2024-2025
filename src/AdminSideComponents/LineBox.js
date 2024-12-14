function LineBox12({name,Quantity,Increase,image}){
    return (
        <div className="w-full flex mt-3 border-b-[1px] border-[#E1E2E6] pb-1">
        <div className="w-[40%] flex gap-3 items-center">
            <img src={image} className="w-4 h-4 rounded-full"/>
         
         <div>   {name}</div>
            </div>
        <div className="w-[60%] flex justify-between">
          <span>{Quantity}</span>
          <span>{Increase}</span>
          <span className="cursor-pointer">
            More
          </span>
        </div>
      </div>
    )
}

export default LineBox12