import { Input } from "../Inputs";
import { InfoParagraph } from "../Paragraphs";
import { useNewCoffee } from "../../_context/NewCoffeeContext";

function GrindSettings({ user, coffee, updateCoffeeData }) {
  
  return (
    <>
      <p className="uppercase text-center p-2">Grind size</p>
      {coffee.grindSettings.map((grinderSetting, grinderIndex) => {
        const matchingGrinder = user.grinders.find(
          (g) => `${g.mark} ${g.model}` === grinderSetting.grinder
        );
        if (!matchingGrinder) return null;

        return (
          <div
            key={grinderSetting.grinder}
            className={grinderIndex % 2 === 0 ? "bg-primary-300" : ""}
          >
            {grinderSetting.settings.map((setting, settingIndex) => (
              <InfoParagraph
                key={`${grinderSetting.grinder}-${setting.name}`}
              >
                {settingIndex === 0 ? (
                  <p>
                    {`${grinderSetting.grinder} (1 - ${matchingGrinder.steps})`}
                  </p>
                ) : (
                  <p>&nbsp;</p> // for spacing
                )}
                <Input
                  type="number"
                  min="0"
                  max={matchingGrinder.steps}
                  label={setting.name}
                  value={setting.value}
                  onChange={(e) =>
                    updateCoffeeData("grindSettings", Number(e.target.value), {
                      grinderIndex,
                      settingIndex,
                    })
                  }
                />
              </InfoParagraph>
            ))}
          </div>
        );
      })}
    </>
  );
}

export default GrindSettings;


