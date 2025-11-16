import { H2, P } from "../Headings";
import Icon from "./Icon";

function CoffeeDrinksCont({ coffee }) {
  return (
    <div className=" xl:justify-start justify-between flex-col w-[100%] xl:pt-[1rem] xl:pb-0 pb-[1rem]">
      <H2>
        Favourite drinks
      </H2>
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        {coffee.coffeeDrink &&
          coffee.coffeeDrink.map((drink) => (
            <div key={"drink" + drink} className="flex flex-col items-center">
              <Icon src={drink} />
              <P className="bg-primary-200 rounded-full px-2 mt-[-5px]">
                {drink.split("_")[0]}{" "}
                {drink.split("_")[1] && drink.split("_")[1] != "drink" ? drink.split("_")[1] : ""}
              </P>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CoffeeDrinksCont;
