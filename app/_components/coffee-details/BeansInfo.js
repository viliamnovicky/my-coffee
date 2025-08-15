import { H2, P } from "../Headings"
import DetailsPrimary from "./DetailsPrimary"
import DetailsSecondary from "./DetailsSecondary"
import Image from "next/image";
import beansBg from "../../../public/icons/beans-bg.png"

function BeansInfo({coffee}) {
    return (
        <DetailsSecondary className="relative self-start flex-col gap-5 min-h-[300px] justify-between pb-[2rem]">
          <Image className="opacity-[20%]" src={beansBg} alt="coffee beans background" fill/>
          <H2 className="p-[1rem]">About beans</H2>
          <div className="flex flex-col px-[2rem] text-primary-950 justify-between">
                <P className="text-left">Variety: <span className="font-bold">{coffee.variety ? coffee.variety : "unknown"}</span></P>
                <P className="text-left">Beans type: <span className="font-bold">{coffee.beanType ? coffee.beanType : "unknown"}</span></P>
                <P className="text-left">Process: <span className="font-bold">{coffee.process ? coffee.process : "unknown"}</span></P>
            
          </div>
        </DetailsSecondary>
    )
}

export default BeansInfo
