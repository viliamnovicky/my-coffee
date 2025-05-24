// app/_components/MyCoffeesList.jsx
import { getCoffees } from "../_lib/data-service";
import Image from "next/image";
import { IoScale } from "react-icons/io5";
import { GiManualMeatGrinder } from "react-icons/gi";
import { AiFillFilter } from "react-icons/ai";
import { FaHeart, FaWeight } from "react-icons/fa";
import Link from "next/link";

export default async function MyCoffeesList() {
  const coffees = await getCoffees();

  return (
    <div>
      <ul>
        {coffees.map((coffee, i) => (
          <li
            key={coffee.coffeeName}
            className={`${
              i % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
            } text-primary-950 grid md:grid-cols-[1fr_3fr_1fr_1.5fr_1fr_1fr_1fr_1fr] gap-4 items-center p-2 justify-between m-auto max-w-[1360px] grid-cols-1`}
          >
            <div className="w-[70px] h-[70px] relative rounded-full overflow-hidden md:m-0 m-auto">
              <Image
                src={coffee.image}
                key={coffee.id + "image"}
                fill
                alt={coffee.id + "image"}
                className="object-cover"
              />
            </div>
            <p className="uppercase p-4 md:m-0 m-auto">
              {coffee.roasteryName} {coffee.coffeeName}
            </p>
            <div className="flex items-center gap-2 px-10 md:px-0">
              <FaWeight className="text-primary-950" />
              <p>{coffee.doseLevel === 0 ? "?" : coffee.doseLevel}</p>
            </div>
            <div className="flex items-center gap-2 px-10 md:px-0">
              <IoScale className="text-primary-950" />
              <p>
                {coffee.weightSingle === 0 ? "?" : coffee.weightSingle}g /{" "}
                {coffee.weightDouble === 0 ? "?" : coffee.weightDouble}g
              </p>
            </div>
            <div className="flex items-center gap-2 px-10 md:px-0">
              <GiManualMeatGrinder className="text-primary-950" />
              <p>
                {coffee.grind === 0 ? "?" : coffee.grind} /{" "}
                {coffee.grindManual === 0 ? "?" : coffee.grindManual}
              </p>
            </div>
            <div className="flex items-center gap-2 px-10 md:px-0">
              <AiFillFilter className="text-primary-950" />
              <p>{coffee.grindFilter === 0 ? "?" : coffee.grindFilter}</p>
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
