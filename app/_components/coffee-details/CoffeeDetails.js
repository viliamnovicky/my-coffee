import { AddCoffeeButton } from "../Buttons";
import CoffeeStats from "./CoffeeStats";
import Section from "./Section";
import CoffeeImage from "./CoffeeImage";
import CoffeeSettings from "./CoffeeSettings";
import DetailsPrimary from "./DetailsPrimary";
import DetailsSecondary from "./DetailsSecondary";
import { H2 } from "../Headings";

import ElevationCont from "./ElevationCont";
import NotesCont from "./NotesCont";
import OriginCont from "./OriginCont";
import DrinksCont from "./DrinksCont";
import CoffeeOptions from "./CoffeeOptions";
import BackButton from "./BackButton";
import BeansInfo from "./BeansInfo";
import CoffeeWeight from "./CoffeeWeight";



function CoffeeDetails({ coffee, grinders }) {
  
  return (
    <div className="relative w-screen flex flex-col xl:mt-[80px] mt-[140px]">
      <AddCoffeeButton />
      <BackButton href="/coffees"/>
      <h1 className="text-center text-primary-950 uppercase xl:text-[4rem] text-[2.5rem] font-thin inline relative m-auto">
        {coffee.roasteryName} <span className="font-normal">{coffee.coffeeName}</span>
      </h1>
      <H2>{`„${coffee.description}”`}</H2>
      <Section className="relative">
        <h2 className="w-full text-center text-primary-950 text-[1.5rem] xl:text-[1.6rem] p-[1rem] italic absolute top-1 font-medium">
        Settings
      </h2>
        <DetailsPrimary className="bg-gradient-5 xl:rounded-full xl:rounded-tr-[1rem] xl:rounded-br-[1rem]">
          <CoffeeImage coffee={coffee} />
          <CoffeeSettings coffee={coffee} grinders={grinders}/>
        </DetailsPrimary>
        <DetailsPrimary className="">
        
          <CoffeeWeight coffee={coffee} grinders={grinders}/>
        </DetailsPrimary>
        {/* <DetailsSecondary className="z-10 self-end h-auto xl:mt-5">
          <CoffeeStats coffee={coffee} />
        </DetailsSecondary> */}
      </Section>
      <Section className="xl:mt-[-5rem]">
        <BeansInfo coffee={coffee}/>
        <OriginCont coffee={coffee}/>
      </Section>
      <Section>
        <NotesCont coffee={coffee}/>
        <ElevationCont coffee={coffee}/>
      </Section>
      <CoffeeOptions coffee={coffee}/>
    </div>
  );
}

export default CoffeeDetails;
