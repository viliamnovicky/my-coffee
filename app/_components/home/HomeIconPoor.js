import Image from "next/image";
import Home from "../../../public/icons/home-poor-coffee.png";
import { H2 } from "../Headings";

function HomeIconPoor({ children }) {
  return (
    <div className="flex flex-col xl:w-[600px] w-[96vw] xl:m-0 m-auto">
      <H2 className="">Every poorly brewed gram of coffee is a tiny tragedy.</H2>
      <div className="xl:w-[600px] w-[96vw] aspect-[16/9] relative flex flex-col items-center justify-center p-2 rounded-[1rem]">
        <Image src={Home} alt="my-coffee-home-logo" fill className="absolute object-contain" />
        {children}
      </div>
    </div>
  );
}

export default HomeIconPoor;
