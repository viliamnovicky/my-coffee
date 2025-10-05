import { GiCoffeeBeans } from "react-icons/gi";

function LoadingCoffees() {
  return (
    <div className="bg-primary-100 mt-[2rem] m-auto animate-pulse text-primary-950 w-[95vw] h-[95vw] xl:w-[500px] xl:h-[500px] flex justify-center items-center rounded-full">
      <GiCoffeeBeans className="text-[10rem]" />
    </div>
  );
}

export default LoadingCoffees;
