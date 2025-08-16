import { getCoffees } from "../_lib/data-service";
import Image from "next/image";

import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import Icon from "./coffee-details/Icon";

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

            <div className="flex items-center gap-2 px-10 md:px-0 flex-wrap justify-center xl:justify-start">
              {coffee.coffeeType.map((type) => (
                <Icon key={type + "-icon"} src={type} />
              ))}
            </div>

            <div className="flex items-center gap-2 px-10 md:px-0 justify-center xl:justify-start">
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
