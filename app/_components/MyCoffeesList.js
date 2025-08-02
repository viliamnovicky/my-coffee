// app/_components/MyCoffeesList.jsx
import { getCoffees } from "../_lib/data-service";
import Image from "next/image";
import { IoScale } from "react-icons/io5";
import { GiManualMeatGrinder } from "react-icons/gi";
import { AiFillFilter } from "react-icons/ai";
import { FaHeart, FaWeight } from "react-icons/fa";
import Link from "next/link";
import { H2 } from "./Headings";

import { GiMokaPot } from "react-icons/gi";
import porta from "../../public/icons/porta.png";
import BioIcon from "./BioIcon";
import Icon from "./Icon";

export default async function MyCoffeesList({ user }) {
  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Fcoffee_pouch_matt_black.png?alt=media&token=0d8fcb20-ccf0-4440-a018-2ee6522215fd";
  const coffees = await getCoffees({ user });

  return (
    <div>
      <ul>
        {coffees.map((coffee, i) => (
          <li
            key={coffee.coffeeName}
            className={`${
              i % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
            } text-primary-950 grid md:grid-cols-[1fr_3fr_3fr_1fr_1fr] gap-4 items-center p-2 justify-between m-auto max-w-[1360px] grid-cols-1`}
          >
            <div className="w-[70px] h-[70px] relative rounded-full overflow-hidden md:m-0 m-auto">
              <Image
                src={coffee.image ? coffee.image : defaultImage}
                key={coffee.id + "image"}
                fill
                alt={coffee.id + "image"}
                className="object-cover bg-primary-100"
              />
            </div>
            <p className="uppercase p-4 md:m-0 m-auto">
              {coffee.roasteryName} <span className="font-bold">{coffee.coffeeName}</span>
            </p>
            {/* <div className="flex items-center gap-2 px-10 md:px-0">
              <FaWeight className="text-primary-950" />
              <p>{coffee.doseLevel === 0 ? "?" : coffee.doseLevel}</p>
            </div> */}
            <div className="flex items-center gap-2 px-10 md:px-0">
              {coffee.coffeeType.map((type) => (
                <p key={type + "-use"}>{type === "moka" ? <GiMokaPot className="text-[2rem] rounded-full p-1 bg-white"/> : type === "espresso" ? <Icon src={porta} className="w-[32px] h-[32px] rounded-full border-4 border-white bg-white"/> : ""}</p>
              ))}
            </div>

            <div className="flex items-center gap-2 px-10 md:px-0">
              <FaHeart className="text-primary-950" />
              <p>{coffee.rating === 0 ? "?" : coffee.rating}/10</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                href={`/coffees/${coffee.slug}`}
                className="bg-primary-700 px-4 py-2 rounded-lg text-primary-50 uppercase hover:bg-primary-800"
              >
                details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
