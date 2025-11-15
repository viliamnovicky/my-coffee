import { PiHeartFill } from "react-icons/pi";
import { CountryName, H2, P } from "../Headings";
import { InfoParagraph, StatParagraph } from "../Paragraphs";
import DetailsPrimary from "./DetailsPrimary";
import OriginMap from "./OriginMap";
import countries from "@/public/data/countries";
import MachineIcon from "./MachineIcon";
import BioIcon from "../BioIcon";
import Tag from "../Tag";
import Bio from "@/public/icons/bio.png";
import Co2 from "@/public/icons/co2.png";

function OriginCont({ coffee, className }) {
  const match = countries.find((c) => c.name.toLowerCase() === coffee?.origin[0]?.toLowerCase());
  const description = match ? match.description : "No description available.";
  return (
    <DetailsPrimary
      className={`xl:w-[100%] xl:mt-0 self-end xl:rounded-l-[1rem] xl:rounded-r-full relative overflow-visible xl:min-h-[300px] justify-between items-center ${className}`}
    >
      <div className="w-full">
        <H2 className="pl-2">Origin</H2>
        <CountryName coffee={coffee} />
        <OriginMap coffee={coffee} />
      </div>
      <div className="w-full flex items-end flex-col xl:pr-[2rem]">
        <div className="flex xl:items-center justify-start w-full !m-auto xl:!m-0 !mt-4 xl:!mt-0 xl:pr-10">
          <div className="flex items-end justify-start w-full px-1 pb-1 gap-[2rem]">
            {coffee.isClimaNeutral && (
              <BioIcon
              src={Co2}
              className="!aspect-video xl:!w-[80px] !w-[60px] opacity-75 xl:!relative !absolute top-0 xl:left-0 left-[1rem]"
              />
            )}
            {coffee.isBio ? <BioIcon src={Bio} className="!aspect-video" /> : <div></div>}
          </div>
        {coffee.beansScore > 0 && (
          <div className="flex flex-col justify-center items-center">
            <p className=" bg-white rounded-full w-[35px] h-[35px] flex justify-center items-center text-primary-950 mb-[-7px] z-10">
              {coffee.beansScore}
            </p>
            <Tag color="Speciality" addClass="flex xl:mb-4 mb-1 justify-self-end mr-2">
              speciality
            </Tag>
          </div>
        )}
        </div>
        <InfoParagraph className="flex-col !gap-0 w-[100%] !p-0 xl:mb-2">
          <div className="flex items-center justify-between w-full p-2 bg-primary-50">
            <span className="flex justify-center gap-2">
              {/* <MachineIcon icon={`${setting.name.split(" ")[0]}`} /> */}
              beans
            </span>
            <span>{coffee.beanType ? coffee.beanType : "unknown"}</span>
          </div>
          <div className={`flex items-center justify-between w-full p-2 bg-primary-100`}>
            <span className="flex justify-center gap-2">
              {/* <MachineIcon icon={`${setting.name.split(" ")[0]}`} /> */}
              variety
            </span>
            <span>{coffee.variety ? coffee.variety : "unknown"}</span>
          </div>
          <div className={`flex items-center justify-between w-full p-2 bg-primary-50`}>
            <span className="flex justify-center gap-2">
              {/* <MachineIcon icon={`${setting.name.split(" ")[0]}`} /> */}
              process
            </span>
            <span>{coffee.process ? coffee.process : "unknown"}</span>
          </div>
        </InfoParagraph>
        <P className="w-full self-center xl:pr-[2rem] pr-0 px-0 p-[1rem] xl:p-0 xl:text-[1.2rem] text-center">{`„${description}”`}</P>
      </div>
    </DetailsPrimary>
  );
}

export default OriginCont;
