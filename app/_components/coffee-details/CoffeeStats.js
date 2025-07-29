import { PiCoffeeBeanFill, PiCoffeeBeanLight, PiHeartFill, PiHeartLight } from "react-icons/pi";
import { InfoParagraph, StatParagraph } from "../Paragraphs";
import {H2} from "../Headings";
import Image from "next/image";
import Tag from "../Tag";

function CoffeeStats({ coffee }) {
  return (
    <div className="min-w-[33vw]">
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
      <H2>Flavours</H2>
          <div className="flex gap-2 w-full justify-center h-auto flex-wrap ">
            {coffee.taste.map((t) => (
              <div key={t.name + "container"} className="relative min-w-[160px] h-[70px]">
                <Tag key={t.name + "tag"} color={t.category} text={t.name} addClass="absolute bottom-0 left-[50%] bottom-[10px] translate-x-[-50%] w-full"/>
                <Image
                  alt={t.name + "image"}
                  src={`/icons/${t.category}.png`}
                  className="object-cover m-auto"
                  width={100}
                  height={70}
                  key={t.name + "image"}
                />
              </div>
            ))}
          </div>
    </div>
  );
}

export default CoffeeStats;
