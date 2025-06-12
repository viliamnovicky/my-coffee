import { H2 } from "../Headings"
import DetailsPrimary from "./DetailsPrimary"
import DetailsSecondary from "./DetailsSecondary"

function BeansInfo({coffee}) {
    return (
        <DetailsSecondary className="self-start flex-col gap-5 min-h-[300px] justify-between pb-[2rem]">
          <H2 className="p-[1rem]">About beans</H2>
          <div className="flex flex-col px-[2rem] text-primary-950 justify-between">
                  
                <p>Farm: {coffee.farm ? coffee.farm : "unknown"}</p>
                <p>Variety: {coffee.variety ? coffee.variety : "unknown"}</p>
                <p>Beans type: {coffee.beanType ? coffee.beanType : "unknown"}</p>
                <p>Process: {coffee.process ? coffee.process : "unknown"}</p>
            
          </div>
        </DetailsSecondary>
    )
}

export default BeansInfo
