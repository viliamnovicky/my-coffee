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
      <BackButton href="/coffees" />
      <h1 className="text-center text-primary-950 uppercase xl:text-[4rem] text-[2.5rem] font-thin inline relative m-auto">
        {coffee.roasteryName} <span className="font-normal">{coffee.coffeeName}</span>
      </h1>
      <H2>{`„${coffee.description}”`}</H2>
      <div className="w-full min-h-[500px]">
        <Section className="relative">
          <H2 className="invisible xl:visible w-[50vw] p-[1rem]  xl:absolute top-1 right-[30vw] text-right">
            Settings
          </H2>
          <DetailsPrimary className="xl:bg-gradient-5 xl:rounded-full xl:rounded-tr-[1rem] xl:rounded-br-[1rem]">
            <CoffeeImage coffee={coffee} />
          </DetailsPrimary>
          <DetailsPrimary>
            <H2 className="xl:hidden pb-0 mb-[-2rem]">
            Settings
          </H2>
            <CoffeeSettings coffee={coffee} grinders={grinders} />
          </DetailsPrimary>
          <DetailsPrimary>
            <CoffeeWeight coffee={coffee} grinders={grinders} />
          </DetailsPrimary>
        </Section>
      </div>

      <Section className="xl:mt-[-5rem]">
        <CoffeeStats coffee={coffee} />
        <OriginCont coffee={coffee} />
      </Section>
      <Section>
        <NotesCont coffee={coffee} />
        <ElevationCont coffee={coffee} />
      </Section>
      <CoffeeOptions coffee={coffee} />
    </div>
  );
}

export default CoffeeDetails;
