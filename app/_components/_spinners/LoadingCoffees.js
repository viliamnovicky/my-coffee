import { GiCoffeeBeans } from "react-icons/gi";

function LoadingCoffees() {
  return (
    <div className="bg-primary-100 z-10 animate-pulse text-primary-950 w-[95vw] h-[95vw] md:w-[500px] md:h-[500px] flex justify-center items-center fixed top-[25rem] bottom-0 md:top-[50%] left-[50%] rounded-full translate-y-[-50%] translate-x-[-50%]">
      <GiCoffeeBeans className="text-[10rem]" />
    </div>
  );
}

export default LoadingCoffees;
