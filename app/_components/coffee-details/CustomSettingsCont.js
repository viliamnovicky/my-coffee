import { H2, P } from "../Headings";
import { InfoParagraph, StatParagraph } from "../Paragraphs";

function CustomSettingsCont({ coffee }) {
  if (!coffee.customSettings || coffee.customSettings.length === 0)
    return (
      <div
        className={`relative h-auto w-[100%] flex flex-col justify-start rounded-[1rem] overflow-hidden mt-[3rem]`}
      >
        <p className="uppercase text-primary-950 p-1 text-center">Custom Settings</p>

        <p className="text-primary-950">add your custom settings</p>
      </div>
    );
  
  return (
    <div
      className={`relative h-auto w-[100%] flex flex-col justify-start rounded-[1rem] overflow-hidden mt-[3rem]`}
    >
      <p className="uppercase text-primary-950 p-1 text-center">Custom Settings</p>

      {coffee.customSettings
        .filter((setting) => setting.settings && setting.settings.length > 0)
        .map((setting) => (
          <div key={setting.name} className="pt-[1rem]">
            <span className="w-auto uppercase py-1 text-primary-950 bg-primary-100 px-2 font-medium">
              {setting.maker.name}
            </span>

            <InfoParagraph>
              {setting.settings[0]?.name}
              <span>{setting.settings[0]?.value}</span>
            </InfoParagraph>
          </div>
        ))}
    </div>
  );
}

export default CustomSettingsCont;
