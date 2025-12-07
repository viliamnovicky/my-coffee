import { AddCoffeeButton } from "../Buttons";
import CoffeeStats from "./CoffeeStats";
import Section from "./Section";
import CoffeeImage from "./CoffeeImage";
import DetailsPrimary from "./DetailsPrimary";
import { H2 } from "../Headings";

import ElevationCont from "./ElevationCont";
import OriginCont from "./OriginCont";
import BackButton from "./BackButton";


function CoffeeDetails({ coffee }) {
  return (
    <div className="relative w-full flex flex-col mt-[8vh]">
      <AddCoffeeButton href={"/new-coffee"}/>
      <BackButton href="/coffees" />
      <h1 className="text-center text-primary-950 uppercase xl:text-[4rem] text-[2.5rem] font-thin inline relative m-auto">
        {coffee.roasteryName}{" "}
        <span className="font-normal">{coffee.coffeeName}</span>
      </h1>
      <H2 className="xl:max-w-[1200px] p-2 m-auto">{`„${coffee.description}”`}</H2>

      <Section className="relative xl:h-[470px] ">
        <DetailsPrimary className="xl:h-full xl:w-full relative xl:bg-gradient-5 xl:rounded-full xl:rounded-tr-[1rem] xl:rounded-br-[1rem]">
          <CoffeeImage coffee={coffee} />
          <CoffeeStats coffee={coffee} />
        </DetailsPrimary>
      </Section>
      <Section >
          <OriginCont coffee={coffee} className="bg-gradient-1" />
        <ElevationCont coffee={coffee} className="xl:!mt-0" />
      </Section>
    </div>
  );
}

export default CoffeeDetails;
