import { useNavigate } from "react-router-dom";

function NavComponent({ NavComp, inde, value, funct, Destination }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Call the provided function with the value
    funct(value);

    // Navigate to the specified destination if provided
    if (Destination) {
      navigate(Destination);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`w-8 h-8 mt-5 ${
        inde === value ? "bg-[#F19E38] text-white" : "bg-white"
      } cursor-pointer rounded-sm flex justify-center items-center`}
    >
      <NavComp className="w-6 h-6 bg-transparent" />
    </div>
  );
}

export default NavComponent;
