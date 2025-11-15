import { InfoParagraph } from "../Paragraphs";
import MachineIcon from "./MachineIcon";

function CoffeeWeight({ coffee, grinders }) {
  return (
    <div
      className={`relative h-auto w-[100%] flex flex-col justify-start rounded-[1rem] overflow-hidden mt-[3rem]`}
    >
      <InfoParagraph color="" className="flex flex-col relative !p-0 overflow-y-auto xl:h-[310px] rounded-[1rem] bg-primary-50">
        <p className="sticky top-0 bg-primary-50 w-full text-center z-10">weight</p>
        {coffee.weightSettings?.map((weight) => {
          const matchedGrinder = grinders.find((g) => `${g.mark} ${g.model}` === weight.grinder);

          return (
            <div
              className="w-[100%] flex flex-col justify-center xl:items-start items-center pb-1 gap-4"
              key={weight.maker + "_weight_settings"}
            >
              <span className=" w-auto bg-primary-100 px-2 font-medium">{weight.maker}</span>
              <span className="flex flex-col xl:flex w-full justify-between items-start m-auto">
                {weight.values
                  ?.filter((setting) => setting.value > 0)
                  .map((setting, i) =>
                    setting.value > 0 ? (
                      <div
                        key={`span_${setting.name}`}
                        className={`flex items-center justify-between w-full p-2 ${
                          i % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
                        }`}
                      >
                        <span key={"span_" + setting.name} className="flex justify-center gap-2">
                          <MachineIcon icon={`${setting.name.split(" ")[0]}`} />
                          {setting.name}
                        </span>
                        <span>{setting.value}g</span>
                      </div>
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
