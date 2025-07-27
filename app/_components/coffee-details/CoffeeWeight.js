import { InfoParagraph } from "../Paragraphs";
import MachineIcon from "./MachineIcon";
import ManualCoffeeGrinder from "../../../public/icons/manual-grinder.svg";
import espresso from "../../../public/icons/coffee-machine.svg";
import filter from "../../../public/icons/coffee-filter.png";
import g8g from "../../../public/icons/coffee-filter.png";
import mokka from "../../../public/icons/moka.svg";
import drop from "../../../public/icons/drop.svg";
import Image from "next/image";

function CoffeeWeight({ coffee, grinders }) {
  return (
    <div
      className={`${
        coffee?.origin[1] && "pb-[65px]"
      } relative h-auto w-[100%] flex flex-col justify-start rounded-[1rem] overflow-hidden mt-[3rem]`}
    >
      <InfoParagraph color="" className="flex flex-col">
        Weight
        {coffee.weightSettings?.map((weight) => {
          const matchedGrinder = grinders.find((g) => `${g.mark} ${g.model}` === weight.grinder);

          return (
            <div
              className="w-full flex flex-col justify-center xl:items-start items-center border-b-[1px] border-primary-100 pb-1 gap-1"
              key={weight.maker + "_weight_settings"}
            >
              <span className=" w-auto bg-primary-100 px-2 font-medium">{weight.maker}</span>
              <span className="grid xl:gap-5 gap-1 grid-cols-2 xl:flex w-full justify-start m-auto">
                {weight.values?.map((setting) =>
                  setting.value > 0 ? (
                    <span key={"span_" + setting.name} className="flex justify-center">
                      <MachineIcon icon={`${setting.name.split(" ")[0]}`} />
                      {setting.value}g
                    </span>
                  ) : null
                )}
              </span>
            </div>
          );
        })}
      </InfoParagraph>
    </div>
  );
}

export default CoffeeWeight;
