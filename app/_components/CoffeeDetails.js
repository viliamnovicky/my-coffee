import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { InfoParagraph, RatingParagraph, StatParagraph } from "./Paragraphs";
import { PiCoffeeBeanFill, PiCoffeeBeanLight, PiHeartFill, PiHeartLight } from "react-icons/pi";
import ManualCoffeeGrinder from "../../public/icons/manual-grinder.svg";
import MachineCoffeeGrinder from "../../public/icons/coffee-machine.svg";
import Drop from "../../public/icons/drop.svg";

function CoffeeDetails({ coffee }) {
  return (
    <div className="relative">
      <Link
        href="/coffees"
        className=" bg-primary-100 hover:bg-primary-200 w-[2.5rem] h-[2.5rem] flex rounded-full absolute left-2 top-2 items-center justify-center"
      >
        <IoMdArrowRoundBack className="text-[2rem]" />
      </Link>
      <h1 className="w-full text-center text-primary-950 uppercase md:text-[4rem] text-[2.5rem] font-thin ">
        {coffee.roasteryName} <span className="font-normal">{coffee.coffeeName}</span>
      </h1>
      <h2 className="w-full text-center text-primary-950 text-[1.5rem] md:text-[2rem] italic font-thin ">{`„${coffee.description[0]}”`}</h2>
      <div className=" w-[100vw] h-auto grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] m-auto p-4">
        <div className="h-[550px] md:h-auto w-[100%] bg-gradient-1 rounded-t-full rounded-lt-none md:rounded-l-full md:rounded-r-none relative p-10 overflow-hidden flex flex-col justify-center items-center">
          <Image
            src={coffee.image}
            alt={coffee.coffeeName}
            width="400"
            height="400"
            className="object-cover rounded-full p-2"
          />
        </div>
        <div className=" px-1 py-2 justify-start bg-gradient-2 h-auto w-[100%] flex flex-col">
          <StatParagraph
            name="rating"
            value={[coffee.rating, 10]}
            IconFill={PiHeartFill}
            IconLight={PiHeartLight}
          />
          <InfoParagraph color="dark">
            origin:
            <span>
              {coffee.origin.map((country, index) =>
                index !== coffee.origin.length - 1 ? country + ", " : country
              )}
            </span>
          </InfoParagraph>

          <InfoParagraph>
            type: <span>{coffee.coffeeType}</span>
          </InfoParagraph>
          <InfoParagraph color="dark">
            beans:<span>{coffee.beanType}</span>
          </InfoParagraph>
          <InfoParagraph>
            taste:{" "}
            <span>
              {" "}
              {coffee.taste[0]}
              {coffee.taste[1] ? `, ${coffee.taste[1]}` : ""}
              {coffee.taste[2] ? `, ${coffee.taste[2]}` : ""}
            </span>
          </InfoParagraph>

          <InfoParagraph color="dark">
            elevation:
            <span>
              {coffee.elevation.bottom !== 0
                ? `${coffee.elevation.bottom} - ${coffee.elevation.top} m`
                : `${coffee.elevation.top}m`}
            </span>
          </InfoParagraph>
        </div>
        <div className="bg-gradient-3 h-auto w-[100%] flex flex-col px-1 py-2 justify-start">
        <StatParagraph
            name="roast"
            value={[coffee.roast, 5]}
            IconFill={PiCoffeeBeanFill}
            IconLight={PiCoffeeBeanLight}
          />
          <StatParagraph
            name="intensity"
            color="dark"
            value={[coffee.intensity, 5]}
            IconFill={PiCoffeeBeanFill}
            IconLight={PiCoffeeBeanLight}
          />
          <StatParagraph
            name="acidity"
            value={[coffee.acidity, 5]}
            IconFill={PiCoffeeBeanFill}
            IconLight={PiCoffeeBeanLight}
          />

          <InfoParagraph color="dark">
            Machine dose level:
            <span>{coffee.machineDoseLevel ? coffee.machineDoseLevel : "?"} / 40</span>
          </InfoParagraph>
          <InfoParagraph color="light">
            weight:
            <span className="flex gap-2">
              <span className="flex">
                <Image src={Drop} width={20} height={20} alt="grinder" />
                {coffee.weightSingle}g
              </span>
              <span className="flex">
                <Image src={Drop} width={20} height={20} alt="grinder" />
                <Image src={Drop} width={20} height={20} alt="grinder" />
                {coffee.weightDouble}g
              </span>
            </span>
          </InfoParagraph>

          <InfoParagraph color="dark">
            Grinding size:
            <span className="flex gap-2">
              <span className="flex">
                <Image src={MachineCoffeeGrinder} width={20} height={20} alt="grinder" className="pr-1" />
                {coffee.grindMachine ? coffee.grindMachine : "?"} / 7{" "}
              </span>
              <span className="flex">
                <Image src={ManualCoffeeGrinder} width={25} height={25} alt="grinder" className="pr-1" />
                {coffee.grindGrinder ? coffee.grindGrinder : "?"} / 32
              </span>
            </span>
          </InfoParagraph>
        </div>
        <div className="relative h-[400px] md:h-auto w-[100%] p-10 bg-gradient-4 rounded-b-full md:rounded-bl-none md:rounded-r-full overflow-hidden">
          <Image
            src={`/maps/${coffee.origin[0]}.svg`}
            fill
            className="object-cover opacity-30"
            alt="coffe-rigin-country"
          />
          <p className="capitalize absolute md:top-[50%] top:[20%] left-[10%] md:left-0 opacity-50 italic text-[7rem] md:text-[9rem]">
            {coffee.origin[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoffeeDetails;
