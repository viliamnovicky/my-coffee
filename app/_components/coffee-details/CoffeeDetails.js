import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

import { AddCoffeeButton } from "../Buttons";
import CoffeeStats from "./CoffeeStats";
import Section from "./Section";
import CoffeeImage from "./CoffeeImage";
import CoffeeSettings from "./CoffeeSettings";
import DetailsPrimary from "./DetailsPrimary";
import DetailsSecondary from "./DetailsSecondary";
import OriginMap from "./OriginMap";
import { CountryName, H2, P } from "../Headings";
import countries from "@/public/data/countries";

function CoffeeDetails({ coffee }) {
  const match = countries.find((c) => c.name.toLowerCase() === coffee.origin[0].toLowerCase());
  const description = match ? match.description : "No description available.";
  return (
    <div className="relative w-screen flex flex-col xl:mt-[80px] mt-[120px]">
      <AddCoffeeButton />
      <Link
        href="/my-coffees"
        className="z-50 bg-primary-200 hover:bg-primary-300 xl:w-[50px] xl:h-[50px] w-[35px] h-[35px] flex rounded-full fixed left-3 xl:top-[90px] top-[95px] items-center justify-center"
      >
        <IoMdArrowRoundBack className="text-[1.6rem]" />
      </Link>
      <h1 className="text-center text-primary-950 uppercase xl:text-[4rem] text-[2.5rem] font-thin inline relative m-auto">
        {coffee.roasteryName} <span className="font-normal">{coffee.coffeeName}</span>
      </h1>
      <H2>{`„${coffee.description}”`}</H2>
      {/* <div className="flex justify-between xl:pl-[12.5rem] pl-1 xl:pr-[2rem] pr-1">
        <div className="text-primary-950 flex pt-2 m-auto xl:m-0">
          {coffee.origin.length === 1 ? (
            <Tag text="Single origin" color="blend" />
          ) : (
            <Tag text="blend" color="blend" />
          )}{" "}
          {coffee.origin.map((origin) => (
            <Tag key={origin} text={origin} addClass={"ml-2"} />
          ))}
        </div>
        <div className="text-primary-950 flex pt-2 m-auto xl:m-0">
          {coffee.coffeeType.map((type) => (
            <Tag key={type} text={type} addClass={"ml-2"} color="medium" />
          ))}
        </div>
      </div> */}
      <Section>
        <DetailsPrimary className="bg-gradient-5 xl:rounded-full xl:rounded-tr-[1rem] xl:rounded-br-[1rem]">
          <CoffeeImage coffee={coffee} />
          <CoffeeSettings coffee={coffee} />
        </DetailsPrimary>
        <DetailsSecondary className="z-10 self-end h-auto mt-5">
          <CoffeeStats coffee={coffee} />
        </DetailsSecondary>
      </Section>
      <Section className="xl:mt-[-5rem]">
        <DetailsSecondary className="self-start flex-col gap-5">
          <H2 className="p-[1rem]">My Findings</H2>
          <P className="p-[1rem]">{coffee.description}</P>
        </DetailsSecondary>
        <DetailsPrimary className="mt-5 self-end xl:rounded-l-[1rem] xl:rounded-r-full bg-gradient-1 relative overflow-visible">
          <H2>Origin</H2>
          <OriginMap coffee={coffee} />
          <CountryName className="uppercase">{coffee.origin[0]}</CountryName>
          <P className="w-[60%] self-center pr-[2rem] text-[1.2rem]">{`„${description}”`}</P>
        </DetailsPrimary>
      </Section>
    </div>
  );
}

export default CoffeeDetails;
