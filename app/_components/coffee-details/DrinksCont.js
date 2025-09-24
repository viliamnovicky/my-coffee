import { GiCoffeePot, GiMokaPot } from "react-icons/gi"
import { H2 } from "../Headings"
import DetailsSecondary from "./DetailsSecondary"
import { SiCoffeescript } from "react-icons/si"
import { LiaCoffeeSolid } from "react-icons/lia"

function DrinksCont({coffee}) {
    return (
        <DetailsSecondary className="self-start flex-col gap-5 min-h-[300px] justify-between pb-[2rem]">
          <H2 className="p-[1rem]">Best for</H2>
          <div className="flex px-[2rem] text-primary-400 text-[4rem] justify-between">
            <div className="flex">
              <GiMokaPot />
              <GiCoffeePot />
            </div>
            <div className="flex">
              <SiCoffeescript />
              <LiaCoffeeSolid />

            </div>
          </div>
        </DetailsSecondary>
    )
}

export default DrinksCont
