import { PiCoffeeBeanFill } from "react-icons/pi";

function Logo() {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="">
        <PiCoffeeBeanFill className=" bg-primary-50 text-primary-950 rounded-full flex items-center justify-center w-[3rem] h-[3rem] p-2" />
      </div>

      <p className="uppercase text-2xl">
        my<span className="font-bold ">coffee</span>
      </p>
    </div>
  );
}

export default Logo;
