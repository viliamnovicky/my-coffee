import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

function CoffeeDetails({ coffee }) {
  return (
    <div className="relative">
      <Link
        href="/coffees"
        className=" bg-primary-100 hover:bg-primary-200 w-[2.5rem] h-[2.5rem] flex rounded-full absolute left-2 top-2 items-center justify-center"
      >
        <IoMdArrowRoundBack className="text-[2rem]" />
      </Link>
      <h1 className="w-full text-center text-primary-950 uppercase text-[4rem] font-thin ">
        {coffee.roasteryName} <span className="font-normal">{coffee.coffeeName}</span>
      </h1>
      <div className="grid grid-cols-[1fr_1fr_.5fr_1fr] m-auto p-4">
        <div className="bg-gradient-1 rounded-l-full relative p-10 overflow-hidden">
          
          <Image
            src={`/maps/${coffee.origin[0]}.svg`}
            fill
            className="object-cover opacity-30"
            alt="coffe-rigin-country"
          />
        </div>
        <div className="bg-gradient-2"></div>
        <div className="bg-gradient-3"></div>
        <div className="relative h-[35rem] w-[35rem] p-10 bg-gradient-4 rounded-r-full">
          <Image
            src={coffee.image}
            alt={coffee.coffeeName}
            fill
            className="object-cover rounded-full p-2"
          />
        </div>
      </div>
    </div>
  );
}

export default CoffeeDetails;
