import { InfoParagraph } from "../Paragraphs";
import Image from "next/image";
import ManualCoffeeGrinder from "../../../public/icons/manual-grinder.svg";
import espresso from "../../../public/icons/coffee-machine.svg";
import filter from "../../../public/icons/coffee-filter.png";
import mokka from "../../../public/icons/moka.svg";
import drop from "../../../public/icons/drop.svg";
import MachineIcon from "./MachineIcon";

function CoffeeSettings({ coffee, grinders }) {
  return (
    <div
      className={`${
        coffee?.origin[1] && "pb-[65px]"
      } relative h-auto w-[100%] flex flex-col justify-start rounded-[1rem] overflow-hidden mt-[3rem]`}
    >
      <InfoParagraph
        color=""
        className="flex flex-col relative py-0 px-0 overflow-y-scroll xl:h-[330px] rounded-[1rem] bg-primary-50"
      >
        <p className="sticky top-0 bg-primary-50 w-full text-center z-10">Grinding size</p>
        {coffee.grindSettings?.map((machine) => {
          const matchedGrinder = grinders.find((g) => `${g.mark} ${g.model}` === machine.grinder);

          return (
            <div
              className="w-full flex flex-col justify-center xl:items-start items-center border-b-[1px] border-primary-100 pb-1 gap-4"
              key={machine.grinder + "_grinder_settings"}
            >
              <span className=" w-auto bg-primary-100 px-2 font-medium">{machine.grinder}</span>
              <span className="flex flex-col xl:flex w-full justify-between items-start m-auto">
                {machine.settings
                  .filter((setting) => setting.value > 0) // Filter first
                  .map((setting, i) => (
                    <div
                      key={`span_${setting.name}`}
                      className={`flex items-center justify-between w-full p-2 ${
                        i % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
                      }`}
                    >
                      <span className="flex justify-center gap-2">
                        <MachineIcon icon={setting.name.split(" ")[0]} />
                        {setting.name}
                      </span>
                      <span>
                        {setting.value} / {matchedGrinder.steps}
                      </span>
                    </div>
                  ))}
              </span>
            </div>
          );
        })}
      </InfoParagraph>
    </div>
  );
}

export default CoffeeSettings;
