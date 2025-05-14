import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { InfoParagraph, RatingParagraph, StatParagraph } from "./Paragraphs";
import { PiCoffeeBeanFill, PiCoffeeBeanLight, PiHeartFill, PiHeartLight } from "react-icons/pi";
import ManualCoffeeGrinder from "../../public/icons/manual-grinder.svg";
import MachineCoffeeGrinder from "../../public/icons/coffee-machine.svg";
import FilterCoffee from "../../public/icons/coffee-filter.png";
import Drop from "../../public/icons/drop.svg";
import Tag from "./Tag";
import { AddCoffeeButton } from "./Buttons";

function CoffeeDetails({ coffee }) {
  return (
    <div className="relative w-[100vw] flex flex-col">
      <AddCoffeeButton />
      <Link
        href="/coffees"
        className=" bg-primary-200 hover:bg-primary-300 w-[50px] h-[50px] flex rounded-full absolute left-3 top-3 items-center justify-center"
      >
        <IoMdArrowRoundBack className="text-[1.6rem]" />
      </Link>
      <h1 className="text-center text-primary-950 uppercase md:text-[4rem] text-[2.5rem] font-thin inline relative m-auto">
        {coffee.roasteryName} <span className="font-normal">{coffee.coffeeName}</span>
      </h1>
      <h2 className="w-full text-center text-primary-950 text-[1.5rem] md:text-[2rem] italic font-thin ">{`„${coffee.description[0]}”`}</h2>
      <div className="text-primary-950 flex pl-0 md:pl-[12.5vw] pt-2 m-auto md:m-0">
        {coffee.origin.length === 1 ? (
          <Tag text="Single origin" color="blend" />
        ) : (
          <Tag text="blend" color="blend" />
        )}{" "}
        {coffee.origin.map((origin) => (
          <Tag key={origin} text={origin} addClass={"ml-2"} />
        ))}
      </div>
      <div className=" w-[100vw] h-auto grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] m-auto p-4">
        <div className="h-[550px] md:h-auto w-[100%] bg-gradient-1 rounded-t-full rounded-lt-none md:rounded-l-full md:rounded-r-none relative p-10 overflow-hidden flex flex-col justify-center items-center">
          {coffee.caffeine && (
            <Tag
              color={coffee.caffeine}
              text={coffee.caffeine}
              addClass="absolute md:right-[75px] md:bottom-[65px] right-[55px] bottom-[120px]"
            />
          )}
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
            best for: <span>{coffee.coffeeType.join(", ")}</span>
          </InfoParagraph>
          <InfoParagraph color="dark">
            beans:<span>{coffee.beanType}</span>
          </InfoParagraph>
          <InfoParagraph>
            taste: <span>{coffee.taste.join(", ")}</span>
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
        <div
          className={`${
            coffee?.origin[1] && "pb-[65px]"
          } relative bg-gradient-3 h-auto w-[100%] flex flex-col px-1 py-2 justify-start`}
        >
          <InfoParagraph color="dark" className="flex flex-col">
            Grinding size:
            <span className="flex gap-5">
              <span className="flex">
                <Image
                  src={FilterCoffee}
                  width={20}
                  height={20}
                  alt="filter-coffee-icon"
                  className="pr-1 py-[3px]"
                />
                {coffee.grindFilter ? coffee.grindFilter : "?"} / 36{" "}
              </span>
              <span className="flex">
                <Image
                  src={MachineCoffeeGrinder}
                  width={20}
                  height={20}
                  alt="grinder-icon"
                  className="pr-1"
                />
                {coffee.grind ? coffee.grind : "?"} / 7{" "}
              </span>
              <span className="flex">
                <Image
                  src={ManualCoffeeGrinder}
                  width={25}
                  height={25}
                  alt="manual-grinder-icon"
                  className="pr-1"
                />
                {coffee.grindManual ? coffee.grindManual : "?"} / 32
              </span>
            </span>
          </InfoParagraph>
          <InfoParagraph color="light" className="flex flex-col">
            weight:
            <span className="flex gap-2">
              <span className="flex">
                <Image src={Drop} width={20} height={20} alt="grinder" />
                {coffee.weightSmall !== 0 ? coffee.weightSmall : "?"}g
              </span>
              <span className="flex">
                <Image src={Drop} width={20} height={20} alt="grinder" />
                {coffee.weightMedium !== 0 ? coffee.weightMedium : "?"}g
              </span>
              <span className="flex">
                <Image src={Drop} width={20} height={20} alt="grinder" />
                <Image src={Drop} width={20} height={20} alt="grinder" />
                {coffee.weightLarge !== 0 ? coffee.weightLarge : "?"}g
              </span>
            </span>
          </InfoParagraph>
          <InfoParagraph color="dark" className="flex flex-col">
            Machine dose level:
            <span className="flex gap-6">
              <span>{coffee.doseLevelSmall ? coffee.doseLevelSmall : "?"} / 40</span>
              <span>{coffee.doseLevelMedium ? coffee.doseLevelMedium : "?"} / 40</span>
              <span>{coffee.doseLevelLarge ? coffee.doseLevelLarge : "?"} / 40</span>
            </span>
          </InfoParagraph>
          {coffee?.origin[1] && (
            <>
              <Image
                src={`/maps/${coffee.origin[1]}.svg`}
                fill
                className="object-cover opacity-20"
                alt="coffe-rigin-country"
              />
              {/* <p className="capitalize absolute bottom:[0px] left-[50%] md:left-0 opacity-30 md:bottom-[40px] bottom-0 p-2  translate-x-[-50%] md:translate-x-0 italic text-[4rem]/[3rem] md:text-[6rem]/[4.5rem] w-[100%] text-center md:text-left">
                {coffee.origin[1]}
              </p> */}
            </>
          )}
        </div>
        <div className="relative h-[400px] md:h-auto w-[100%] p-2 pr-2 px-1 bg-gradient-4 rounded-b-2 md:rounded-bl-none md:rounded-r-[1rem] overflow-hidden">
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
          <Image
            src={`/maps/${coffee.origin[0]}.svg`}
            fill
            className="object-cover opacity-30"
            alt="coffe-rigin-country"
          />
          {/* <p className="capitalize absolute md:bottom-[40px] bottom-[100px] left-[50%] translate-x-[-50%] md:translate-x-0 md:left-0 opacity-50 italic text-[4rem]/[3rem] md:text-[6rem]/[4.5rem] text-center md:text-left">
            {coffee.origin[0]}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default CoffeeDetails;
