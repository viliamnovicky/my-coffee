import { InfoParagraph } from "../Paragraphs";
import Image from "next/image";
import ManualCoffeeGrinder from "../../../public/icons/manual-grinder.svg";
import espresso from "../../../public/icons/coffee-machine.svg";
import filter from "../../../public/icons/coffee-filter.png";
import mokka from "../../../public/icons/moka.svg";
import drop from "../../../public/icons/drop.svg";
import MachineIcon from "./MachineIcon";

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

      <InfoParagraph color="" className="flex flex-col">
        Grinding size:
        {coffee.grindSettings?.map((machine) => (
          <div
            className="w-full flex flex-col justify-center items-start border-b-[1px] border-primary-100 pb-1 gap-1"
            key={machine.grinder + "_grinder_settings"}
          >
            <span className=" w-auto bg-primary-100 px-2 font-medium mt-2">{machine.grinder}</span>
            <span className="grid gap-5 grid-cols-2 xl:flex w-full justify-start m-auto">
              {machine.settings.map((setting) =>
                setting.value > 0 ? (
                  <span key={"span_" + setting.name} className="flex justify-center">
                    <MachineIcon icon={setting.name.split(" ")[0]} />
                    {setting.value} / 8
                  </span>
                ) : null
              )}
            </span>
          </div>
        ))}
      </InfoParagraph>
      <InfoParagraph color="light" className="flex flex-col">
        weight:
        <span className="flex gap-2">
          <span className="flex">
            <Image src={drop} width={20} height={20} alt="grinder" />
            {coffee.weightSmall !== 0 ? coffee.weightSmall : "?"}g
          </span>
          <span className="flex">
            <Image src={drop} width={20} height={20} alt="grinder" />
            {coffee.weightMedium !== 0 ? coffee.weightMedium : "?"}g
          </span>
          <span className="flex">
            <Image src={drop} width={20} height={20} alt="grinder" />
            <Image src={drop} width={20} height={20} alt="grinder" />
            {coffee.weightLarge !== 0 ? coffee.weightLarge : "?"}g
          </span>
        </span>
      </InfoParagraph>
      {/* <InfoParagraph color="dark" className="flex flex-col">
        Machine dose level:
        <span className="flex gap-6">
          <span>{coffee.doseLevelSmall ? coffee.doseLevelSmall : "?"} / 40</span>
          <span>{coffee.doseLevelMedium ? coffee.doseLevelMedium : "?"} / 40</span>
          <span>{coffee.doseLevelLarge ? coffee.doseLevelLarge : "?"} / 40</span>
        </span>
      </InfoParagraph> */}
    </div>
  );
}

export default CoffeeSettings;
