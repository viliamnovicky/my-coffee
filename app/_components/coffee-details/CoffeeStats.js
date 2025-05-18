import { PiCoffeeBeanFill, PiCoffeeBeanLight, PiHeartFill, PiHeartLight } from "react-icons/pi";
import { InfoParagraph, StatParagraph } from "../Paragraphs";
import {H2} from "../Headings";

function CoffeeStats({ coffee }) {
  return (
    <div className="w-[100%]">
      <H2 className="p-[1rem]">
        Stats
      </H2>
      <StatParagraph
        name="rating"
        value={[coffee.rating, 10]}
        IconFill={PiHeartFill}
        IconLight={PiHeartLight}
        color="dark"
      />
      <StatParagraph
        name="roast"
        value={[coffee.roast, 5]}
        IconFill={PiCoffeeBeanFill}
        IconLight={PiCoffeeBeanLight}
      />
      <StatParagraph
        name="intensity"
        color="dark"
        value={[coffee.intensity, 5]}
        IconFill={PiCoffeeBeanFill}
        IconLight={PiCoffeeBeanLight}
      />
      <StatParagraph
        name="acidity"
        value={[coffee.acidity, 5]}
        IconFill={PiCoffeeBeanFill}
        IconLight={PiCoffeeBeanLight}
      />
    </div>
  );
}

export default CoffeeStats;
