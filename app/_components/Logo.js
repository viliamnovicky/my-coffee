"use client"
import { PiCoffeeBeanFill } from "react-icons/pi";
import { Button } from "./Buttons";
import { RxDropdownMenu } from "react-icons/rx";

function Logo() {

  return (
    <div className="flex flex-row items-center gap-2">
      <div className="">
        <PiCoffeeBeanFill className=" bg-primary-50 text-primary-950 rounded-full flex items-center justify-center w-[2rem] h-[2rem] xl:w-[3rem] xl:h-[3rem] xl:p-2 p-1" />
      </div>

      <p className="uppercase xl:text-2xl text-xl text-primary-50">
        my<span className="font-bold ">coffee</span>
      </p>
      <Button onClick={() => setIsNavbarVisible(!isNavbarVisible) } className="absolute right-2 text-[1.5rem] top-[1rem] xl:hidden bg-primary-800 hover:bg-primary-700">
        <RxDropdownMenu />
      </Button>
    </div>
  );
}

export default Logo;
