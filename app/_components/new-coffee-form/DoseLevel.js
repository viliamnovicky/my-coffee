import { Input } from "../Inputs";
import { InfoParagraph } from "../Paragraphs";
import { useNewCoffee } from "../../_context/NewCoffeeContext"; // adjust path as needed

function DoseLevel({ coffee, user, updateCoffeeData }) {
  
  return (
    <>
      <p className="uppercase text-center p-2">Dose level / correction</p>
      <div>
        {user.grinders.map(
          (grinder) =>
            grinder.doseLevel && (
              <InfoParagraph key={grinder.mark + grinder.model}>
                {grinder.mark + " " + grinder.model}
                <Input
                  type="number"
                  min="0"
                  max={40}
                  label={`1 - ${grinder.doseLevel}`}
                  value={
                    coffee.doseLevel.find(
                      (d) => d.grinder === `${grinder.mark} ${grinder.model}`
                    )?.value ?? 0
                  }
                  onChange={(e) =>
                    updateCoffeeData("doseLevel", Number(e.target.value), {
                      grinderName: `${grinder.mark} ${grinder.model}`,
                    })
                  }
                />
              </InfoParagraph>
            )
        )}
      </div>
    </>
  );
}

export default DoseLevel;

