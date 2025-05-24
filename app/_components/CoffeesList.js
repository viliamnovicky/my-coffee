import { getCoffees } from "../_lib/data-service";
import Image from "next/image";

import { IoScale } from "react-icons/io5";
import { GiManualMeatGrinder } from "react-icons/gi";
import { AiFillFilter } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaWeight } from "react-icons/fa";
import Link from "next/link";
import { Suspense } from "react";
import LoadingCoffees from "./_spinners/LoadingCoffees";
import Tag from "./Tag";

async function MyCoffeesList() {
  const coffees = await getCoffees();
  console.log(coffees[0]);
  return (
    <Suspense fallback={<LoadingCoffees />}>
      <div>
        <ul>
          {/* <LoadingCoffees/> */}
          {coffees.map((coffee, i) => (
            <li
              key={coffee.coffeeName}
              className={`${
                i % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
              } text-primary-950 grid gap-4 items-center p-2 justify-between m-auto max-w-[1360px] grid-cols-1 xl:grid-cols-[1fr_1fr_0.75fr]`}
            >
              <div className="flex items-center gap-2 flex-col xl:flex-row">
                <div className="w-[70px] h-[70px] relative rounded-full overflow-hidden xl:m-0 m-auto">
                  <Image
                    src={coffee.image}
                    key={coffee.id + "image"}
                    fill
                    alt={coffee.id + "image"}
                    className="object-cover"
                  />
                </div>
                <p className="uppercase p-4 xl:m-0 m-auto">
                  {coffee.roasteryName} {coffee.coffeeName}
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                {coffee.origin.map((origin) => (
                  <Tag key={origin + "-tag"} text={origin} />
                ))}
              </div>
              <div className="flex items-center justify-center xl:justify-end gap-2">
                <div className="flex justify-center xl:justify-end">
                  <Link
                    href={`/coffees/${coffee.slug}`}
                    className="bg-primary-700 px-4 py-2 rounded-lg text-primary-50 uppercase hover:bg-primary-800"
                  >
                    +
                  </Link>
                </div>
                <div className="flex justify-center xl:justify-end">
                  <Link
                    href={`/coffees/${coffee.slug}`}
                    className="bg-primary-700 px-4 py-2 rounded-lg text-primary-50 uppercase hover:bg-primary-800"
                  >
                    details
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}

export default MyCoffeesList;