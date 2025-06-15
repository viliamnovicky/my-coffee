import { CountryName, H2, P } from "../Headings";
import DetailsPrimary from "./DetailsPrimary";
import OriginMap from "./OriginMap";
import countries from "@/public/data/countries";

function OriginCont({ coffee }) {
  const match = countries.find((c) => c.name.toLowerCase() === coffee?.origin[0]?.toLowerCase());
  const description = match ? match.description : "No description available.";
  return (
    <DetailsPrimary className="xl:mt-5 self-end xl:rounded-l-[1rem] xl:rounded-r-full bg-gradient-1 relative overflow-visible xl:min-h-[300px]">
      <H2 className="pl-2">Origin</H2>
      <CountryName coffee={coffee}/>
      <OriginMap coffee={coffee} />
      <P className="xl:w-[60%] w-full self-center xl:pr-[2rem] p-[1rem] xl:p-0 xl:text-[1.2rem] text-center">{`„${description}”`}</P>
    </DetailsPrimary>
  );
}

export default OriginCont;
