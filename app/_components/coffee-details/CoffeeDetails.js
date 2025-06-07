import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

import { AddCoffeeButton } from "../Buttons";
import CoffeeStats from "./CoffeeStats";
import Section from "./Section";
import CoffeeImage from "./CoffeeImage";
import CoffeeSettings from "./CoffeeSettings";
import DetailsPrimary from "./DetailsPrimary";
import DetailsSecondary from "./DetailsSecondary";
import { H2 } from "../Headings";

import { GiMokaPot } from "react-icons/gi";
import { GiCoffeePot } from "react-icons/gi";

import { SiCoffeescript } from "react-icons/si";
import { LiaCoffeeSolid } from "react-icons/lia";
import ElevationCont from "./ElevationCont";
import NotesCont from "./NotesCont";
import OriginCont from "./OriginCont";
import DrinksCont from "./DrinksCont";



function CoffeeDetails({ coffee }) {
  
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
        <DrinksCont coffee={coffee}/>
        <OriginCont coffee={coffee}/>
      </Section>
      <Section>
        <NotesCont coffee={coffee}/>
        <ElevationCont coffee={coffee}/>
      </Section>
    </div>
  );
}

export default CoffeeDetails;
