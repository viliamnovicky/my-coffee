import { LiaMountainSolid } from "react-icons/lia"
import { H2 } from "../Headings"
import DetailsSecondary from "./DetailsSecondary"

function ElevationCont({coffee}) {
    return (
        <DetailsSecondary className="p-[2rem] justify-between xl:mt-[5rem]">
          <H2 className="absolute">Elevation</H2>
          <LiaMountainSolid className="bg-white text-primary-400 xl:w-[250px] xl:h-[250px] w-[150px] h-[150px] p-[1rem] rounded-full" />
          <div className="text-primary-950 flex flex-col xl:h-[150px] h-[80px] xl:pt-[2rem] w-[50%] justify-between">
            {coffee.elevation.top !== 0 ? (
              <p className="border-b-2 border-primary-200 pb-[.1rem] ml-[1rem] text-right">
                {coffee.elevation.top}m
              </p>
            ) : (
              <p className="border-b-2 border-transparent pb-[.1rem] ml-[1rem] text-right"></p>
            )}
            {coffee.elevation.bottom !== 0 ? (
              <p className="border-b-2 border-primary-200 pb-[.1rem] ml-[1rem] text-right">
                {coffee.elevation.bottom}m
              </p>
            ) : (
              <p className="border-b-2 border-transparent pb-[.1rem] ml-[1rem] text-right"></p>
            )}
            {coffee.elevation.top === 0 && coffee.elevation.bottom === 0 && (
              <p className="border-b-2 border-transparent pb-[.1rem] ml-[1rem] text-right xl:text-[1.3rem]">
                No elevation data
              </p>
            )}
          </div>
        </DetailsSecondary>
    )
}

export default ElevationCont
