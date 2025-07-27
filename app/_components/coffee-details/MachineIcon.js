import Image from "next/image";
import ManualCoffeeGrinder from "../../../public/icons/manual-grinder.svg";
import espresso from "../../../public/icons/coffee-machine.svg";
import filter from "../../../public/icons/coffee-filter.png";
import mokka from "../../../public/icons/moka.svg";
import drop from "../../../public/icons/drop.svg";


function MachineIcon({icon}) {
    let src = espresso
    icon === "espresso" ? src = espresso : icon === "filter" ? src = filter : icon === "mokka" ? src = mokka : icon === "drop" ? src = drop : src = ManualCoffeeGrinder
    return (
        <Image
                              src={src}
                              width={20}
                              height={20}
                              alt="grinder-icon"
                              className="pr-1"
                            />
    )
}

export default MachineIcon
