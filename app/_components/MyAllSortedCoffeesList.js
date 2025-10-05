"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Pagination from "../_components/Pagination"
import { useState } from "react";

function MySortedCoffeesList({ list }) {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") ?? "roasteryName-asc";
  const filter = searchParams.get("filter")?.toLowerCase() ?? "";

  const [page, setPage] = useState(1);
  

  // ✅ helper: highlights matches
  function highlightMatch(text, filter) {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === filter.toLowerCase() ? (
        <span key={i} className="bg-primary-900 text-primary-50 py-1">
          {part}
        </span>
      ) : (
        part
      )
    );
  }

  // ✅ filter first
  const filteredList = list.filter((coffee) => {
    return (
      coffee.roasteryName.toLowerCase().includes(filter) ||
      coffee.coffeeName.toLowerCase().includes(filter)
    );
  });

  // ✅ then sort
  const sortedList = [...filteredList].sort((a, b) => {
    const [field, direction] = sort.split("-");
    if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
    if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination
  const perPage = 10;
  const totalPages = Math.ceil(sortedList.length / perPage);

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentCoffees = sortedList.slice(start, end);

  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/my-home-d1851.appspot.com/o/coffee%2Fcoffee_pouch_matt_black.png?alt=media&token=0d8fcb20-ccf0-4440-a018-2ee6522215fd";

  return (
    <>
      <div className="m-auto">
        <ul>
          {currentCoffees.map((coffee, i) => (
            <li
              key={coffee.roasteryName + "-" + coffee.coffeeName}
              className={`${
                i % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
              } text-primary-950 grid md:grid-cols-[1fr_3fr_3fr_1fr_1fr] gap-4 items-center p-2 justify-between m-auto max-w-[1360px] grid-cols-1`}
            >
              {/* Coffee Image */}
              <div className="w-[70px] h-[70px] relative rounded-full overflow-hidden md:m-0 m-auto">
                <Image
                  src={coffee.image || defaultImage}
                  alt={`${coffee.coffeeName} image`}
                  fill
                  className="object-cover bg-primary-100"
                />
              </div>

              {/* Coffee Name + Roastery */}
              <p className="uppercase p-4 md:m-0 m-auto">
                {highlightMatch(coffee.roasteryName, filter)}{" "}
                <span className="font-bold">
                  {highlightMatch(coffee.coffeeName, filter)}
                </span>
              </p>

              {/* Details Button */}
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
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage}/>
    </>
  );
}

export default MySortedCoffeesList;
