import { useEffect } from "react";
import { Input } from "../Inputs";
import { InfoParagraph } from "../Paragraphs";
import { useNewCoffee } from "../../_context/NewCoffeeContext";

function Weight({ coffee, user, updateCoffeeData }) {
  const { syncWeightSettingsWithMakers } = useNewCoffee();

  useEffect(() => {
    if (
      user.coffeeMakers &&
      user.coffeeMakers.length > 0 &&
      (!coffee.weightSettings || coffee.weightSettings.length === 0)
    ) {
      syncWeightSettingsWithMakers(user.coffeeMakers);
    }
  }, [user.coffeeMakers, coffee.weightSettings, syncWeightSettingsWithMakers]);

  return (
    <>
      <p className="uppercase text-center p-2">Weight</p>
      {user.coffeeMakers &&
        user.coffeeMakers.map((maker, makerIndex) => {
          const makerKey = `${maker.mark} ${maker.model}`;
          const setting = coffee.weightSettings?.find(
            (w) => w.maker === makerKey
          );

          if (!setting) return null;

          return (
            <div key={makerKey}>
              {setting.values.map((weightSetting, weightIndex) => (
                <InfoParagraph
                  color={makerIndex % 2 !== 0 && "dark"}
                  key={makerKey + weightSetting.name}
                >
                  {weightIndex === 0 ? <p>{makerKey}</p> : "\u00A0"}
                  <Input
                    type="number"
                    min="0"
                    max={maker.steps || 36}
                    label={weightSetting.name}
                    value={weightSetting.value}
                    onChange={(e) =>
                      updateCoffeeData("weightSettings", Number(e.target.value), {
                        makerIndex,
                        weightIndex,
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

export default Weight;


