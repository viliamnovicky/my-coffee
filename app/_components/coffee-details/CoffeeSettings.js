import { InfoParagraph } from "../Paragraphs";
import MachineIcon from "./MachineIcon";

function CoffeeSettings({ coffee, grinders }) {
  return (
    <div
      className={`relative h-auto w-[100%] flex flex-col justify-start rounded-[1rem] overflow-hidden mt-[3rem]`}
    >
      <InfoParagraph
        color=""
        className="flex flex-col relative !p-0 overflow-y-auto xl:h-[310px] rounded-[1rem] bg-primary-50"
      >
        <p className="sticky top-0 bg-primary-50 w-full text-center z-10">
          Grinding size
        </p>
        {Array.isArray(coffee.grindSettings) &&
          coffee.grindSettings.map((machine) => {
            const matchedGrinder = grinders.find(
              (g) => `${g.mark} ${g.model}` === machine.grinder
            );

            return (
              <div
                className="w-[100%] flex flex-col justify-center xl:items-start items-center pb-1 gap-4"
                key={machine.grinder + "_grinder_settings"}
              >
                <span className=" w-auto bg-primary-100 px-2 font-medium">
                  {machine.grinder}
                </span>
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
