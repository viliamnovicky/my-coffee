import Image from "next/image";
import ManualCoffeeGrinder from "../../../public/icons/manual-grinder.png";
import espresso from "../../../public/icons/coffee-machine.svg";
import filter from "../../../public/icons/coffee-filter.png";
import mokka from "../../../public/icons/moka.png";
import drop from "../../../public/icons/drop.svg";
import coldBrew from "../../../public/icons/cold-brew.png";
import smallPorta from "../../../public/icons/porta-8g.png";
import mediumPorta from "../../../public/icons/porta-13g.png";
import bigPorta from "../../../public/icons/porta-19g.png";

function MachineIcon({ icon }) {
  let src = espresso;
  icon === "espresso"
    ? (src = espresso)
    : icon === "8g"
    ? (src = smallPorta)
    : icon === "13g"
    ? (src = mediumPorta)
    : icon === "18g"
    ? (src = bigPorta)
    : icon === "cold"
    ? (src = coldBrew)
    : icon === "filter"
    ? (src = filter)
    : icon === "mokka"
    ? (src = mokka)
    : icon === "drop"
    ? (src = drop)
    : (src = ManualCoffeeGrinder);
  return (
    <div className="relative w-[25px] h-[25px] rounded-full bg-white z-0">
      <Image src={src} alt="grinder-icon" fill className="absolute p-[3px] z-0" />
    </div>
  );
}

export default MachineIcon;
