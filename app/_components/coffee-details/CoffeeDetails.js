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

import { GiMokaPot } from "react-icons/gi";
import { LiaMountainSolid } from "react-icons/lia";
import { GiCoffeePot } from "react-icons/gi";

import { SiCoffeescript } from "react-icons/si";
import { LiaCoffeeSolid } from "react-icons/lia";



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
        <DetailsSecondary className="self-start flex-col gap-5 min-h-[300px] justify-between pb-[2rem]">
          <H2 className="p-[1rem]">Best for</H2>
          <div className="flex px-[2rem] text-primary-400 text-[4rem] justify-between">
            <div className="flex">
              <GiMokaPot />
              <GiCoffeePot />
            </div>
            <div className="flex">
              <SiCoffeescript />
              <LiaCoffeeSolid />

            </div>
          </div>
        </DetailsSecondary>
        <DetailsPrimary className="mt-5 self-end xl:rounded-l-[1rem] xl:rounded-r-full bg-gradient-1 relative overflow-visible">
          <H2>Origin</H2>
          <OriginMap coffee={coffee} />
          <CountryName className="uppercase">{coffee.origin[0]}</CountryName>
          <P className="w-[60%] self-center pr-[2rem] text-[1.2rem]">{`„${description}”`}</P>
        </DetailsPrimary>
      </Section>
      <Section>
        <DetailsPrimary className="bg-gradient-5 p-[2rem]">
          <H2 className="p-[1rem]">My Notes</H2>
          <P className="p-[1rem]">
            {coffee.notes ? coffee.notes : "A place for your notes, findings, thoughs..."}
          </P>
        </DetailsPrimary>
        <DetailsSecondary className="p-[2rem] justify-between xl:mt-[5rem]">
          <H2 className="absolute">Elevation</H2>
          <LiaMountainSolid className="bg-white text-primary-400 xl:w-[250px] xl:h-[250px] w-[150px] h-[150px] p-[1rem] rounded-full" />
          <div className="text-primary-950 flex flex-col xl:h-[150px] h-[80px] xl:pt-[2rem] w-[50%] justify-between">
            {coffee.elevation.top !== 0 ? (
              <p className="border-b-2 border-primary-200 pb-[.1rem] ml-[1rem] text-right">
                {coffee.elevation.top}m
              </p>
            ) : (
              <p className="border-b-2 border-transparent pb-[.1rem] ml-[1rem] text-right"></p>
            )}
            {coffee.elevation.bottom !== 0 ? (
              <p className="border-b-2 border-primary-200 pb-[.1rem] ml-[1rem] text-right">
                {coffee.elevation.bottom}m
              </p>
            ) : (
              <p className="border-b-2 border-transparent pb-[.1rem] ml-[1rem] text-right"></p>
            )}
            {coffee.elevation.top === 0 && coffee.elevation.bottom === 0 && (
              <p className="border-b-2 border-transparent pb-[.1rem] ml-[1rem] text-right xl:text-[1.3rem]">
                No elevation data
              </p>
            )}
          </div>
        </DetailsSecondary>
      </Section>
    </div>
  );
}

export default CoffeeDetails;
