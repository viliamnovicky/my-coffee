import { LiaMountainSolid } from "react-icons/lia";
import { H2 } from "../Headings";
import DetailsSecondary from "./DetailsSecondary";
import Image from "next/image";

function ElevationCont({ coffee, className }) {
  return (
    <DetailsSecondary className={`overflow-hidden p-[2rem] relative justify-between xl:mt-[5rem] ${className}`}>
      <Image alt="contours" fill className=" absolute opacity-[20%] invert-[6%] sepia-[92%] saturate-[105%] hue-rotate-[314deg] brightness-[100%] contrast-[98%];" src="/icons/contours.png" />
      <LiaMountainSolid className="z-2 relative bg-white text-primary-400 xl:w-[250px] xl:h-[250px] w-[150px] h-[150px] p-[1rem] rounded-full" />
      <H2 className="absolute z-2">Elevation</H2>
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
  );
}

export default ElevationCont;
