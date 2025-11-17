import { Input } from "../Inputs";
import { InfoParagraph } from "../Paragraphs";

function CustomSettings({ coffee, user, updateCoffeeData }) {
  return (
    <>
      <p className="uppercase text-center p-2">Coffee makers Settings</p>
      <div>
        {user.coffeeMakers.map((maker) => {
          const makerName = `${maker.mark} ${maker.model}`;

          // Correct lookup
          const makerBlock = coffee.customSettings?.find(
            (c) => c.maker.name === makerName
          );

          return (
            <div key={makerName}>
              {Array.isArray(maker.customSettings) &&
                maker.customSettings.map((setting) => {
                  
                  // Correct lookup
                  const savedSetting = makerBlock?.settings.find(
                    (s) =>
                      s.name.toLowerCase() === setting.name.toLowerCase()
                  );

                  return (
                    <InfoParagraph key={makerName + setting.name}>
                      {makerName} – {setting.name}

                      <Input
                        type="number"
                        min="0"
                        max={setting.maxValue ?? 100}
                        label={`${setting.minValue} - ${setting.maxValue}`}
                        value={savedSetting?.value ?? 0}
                        onChange={(e) =>
                          updateCoffeeData("customSettings", Number(e.target.value), {
                            makerName,
                            settingName: setting.name, // important!
                          })
                        }
                      />
                    </InfoParagraph>
                  );
                })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CustomSettings;



