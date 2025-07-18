import { InfoParagraph } from "../Paragraphs";
import Image from "next/image";
import ManualCoffeeGrinder from "../../../public/icons/manual-grinder.svg";
import MachineCoffeeGrinder from "../../../public/icons/coffee-machine.svg";
import FilterCoffee from "../../../public/icons/coffee-filter.png";
import Moka from "../../../public/icons/moka.svg";
import Drop from "../../../public/icons/drop.svg";

function CoffeeSettings({ coffee }) {
  return (
    <div
      className={`${
        coffee?.origin[1] && "pb-[65px]"
      } relative h-auto w-[100%] flex flex-col justify-start rounded-[1rem] overflow-hidden`}
    >
      <h2 className="w-full text-center text-primary-950 text-[1.5rem] xl:text-[2rem] p-[1rem] italic font-thin ">
        Settings
      </h2>

      {/* {coffee.grindSettings.map((setting, index) => (
        <InfoParagraph key={index} className="flex justify-center text-red-400">
          {setting.grinder}
          {setting.settings.map(
            (s) =>
              s.value > 0 && (
                <span key={s.name + s.value + "setting"}>{s.name + ": " + s.value}</span>
              )
          )}
        </InfoParagraph>
      ))} */}

      <InfoParagraph color="dark" className="flex flex-col">
        Grinding size:
        <span className="grid gap-5 grid-cols-2 xl:flex w-full justify-center m-auto">
          <span className="flex justify-center">
            <Image
              src={MachineCoffeeGrinder}
              width={20}
              height={20}
              alt="grinder-icon"
              className="pr-1"
            />
            {coffee.grindMachine ? coffee.grindMachine : "?"} / 8{" "}
          </span>
          <span className="flex justify-center">
            <Image
              src={FilterCoffee}
              width={20}
              height={20}
              alt="filter-coffee-icon"
              className="pr-1 py-[3px]"
            />
            {coffee.grindFilter ? coffee.grindFilter : "?"} / 36{" "}
          </span>
          <span className="flex justify-center">
            <Image
              src={ManualCoffeeGrinder}
              width={25}
              height={25}
              alt="manual-grinder-icon"
              className="pr-1"
            />
            {coffee.grindEspresso ? coffee.grindEspresso : "?"} / 36
          </span>
          <span className="flex justify-center">
            <Image src={Moka} width={25} height={25} alt="manual-grinder-icon" className="pr-1" />
            {coffee.grindMokka ? coffee.grindMokka : "?"} / 36
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
    </div>
  );
}

export default CoffeeSettings;
