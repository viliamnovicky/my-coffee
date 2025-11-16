import { AddCoffeeButton } from "../Buttons";
import CoffeeStats from "./CoffeeStats";
import Section from "./Section";
import CoffeeImage from "./CoffeeImage";
import CoffeeSettings from "./CoffeeSettings";
import DetailsPrimary from "./DetailsPrimary";
import { H2 } from "../Headings";

import ElevationCont from "./ElevationCont";
import NotesCont from "./NotesCont";
import OriginCont from "./OriginCont";
import CoffeeOptions from "./CoffeeOptions";
import BackButton from "./BackButton";
import CoffeeWeight from "./CoffeeWeight";
import CustomSettingsCont from "./CustomSettingsCont";
import CoffeeDrinksCont from "./CoffeeDrinksCont";

function CoffeeDetails({ coffee, grinders }) {
  return (
    <div className="relative w-full flex flex-col mt-[8vh] overflow-x-hidden">
      <AddCoffeeButton />
      <BackButton href="/my-coffee" />
      <h1 className="text-center text-primary-950 uppercase xl:text-[4rem] text-[2.5rem] font-thin inline relative m-auto">
        {coffee.roasteryName} <span className="font-normal">{coffee.coffeeName}</span>
      </h1>
      <H2 className="xl:max-w-[1200px] p-2 m-auto">{`„${coffee.description}”`}</H2>

      <Section className="relative xl:h-[470px] h-auto xl:pb-0">
        <DetailsPrimary className="relative xl:bg-gradient-5 xl:rounded-full xl:rounded-tr-[1rem] xl:rounded-br-[1rem]">
          <CoffeeImage coffee={coffee} />
        </DetailsPrimary>
        <DetailsPrimary className="xl:mt-4">
          <OriginCont coffee={coffee} className="bg-gradient-1" />
        </DetailsPrimary>
      </Section>

      <Section>
        <CoffeeStats coffee={coffee} />
        <CoffeeDrinksCont coffee={coffee}/>
      </Section>
      <H2>Settings</H2>
      <Section>
        <DetailsPrimary>
          <CoffeeSettings coffee={coffee} grinders={grinders} />
        </DetailsPrimary>
        <DetailsPrimary>
          <CoffeeWeight coffee={coffee} grinders={grinders} />
        </DetailsPrimary>
        <DetailsPrimary>
          <CustomSettingsCont coffee={coffee} grinders={grinders} />
        </DetailsPrimary>
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
