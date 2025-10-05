import { Input } from "../Inputs";
import { InfoParagraph } from "../Paragraphs";

function Elevation({coffee, updateCoffeeData}) {
  return (
    <>
      <InfoParagraph color="dark">
        elevation:
        <Input
          label="elevation top"
          type="number"
          min="0"
          max="9000"
          value={coffee.elevation.top}
          placeholder="in meters"
          onChange={(e) => updateCoffeeData("elevation.top", e.target.value)}
        />
      </InfoParagraph>
      <InfoParagraph color="dark">
        <span></span>
        <Input
          label="elevation bottom"
          type="number"
          min="0"
          max="9000"
          value={coffee.elevation.bottom}
          placeholder="in meters"
          onChange={(e) => updateCoffeeData("elevation.bottom", e.target.value)}
        />
      </InfoParagraph>
    </>
  );
}

export default Elevation;
