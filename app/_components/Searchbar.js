"use client";
import { CiSearch } from "react-icons/ci";
import { Button, FilterButton } from "./Buttons";
import { AiOutlineSortDescending } from "react-icons/ai";
import { AiOutlineSortAscending } from "react-icons/ai";
import { GrAscend } from "react-icons/gr";
import { GrDescend } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { PiCoffeeBeanFill } from "react-icons/pi";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Searchbar({ placeholder, user }) {

  const searchParams = useSearchParams();
  const router = useRouter();
  const [value, setValue] = useState(searchParams.get("filter") ?? ""); // ✅ keep input synced with URL

  const activeSort = searchParams.get("sort");

  // ✅ update query params whenever input changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("filter", value);
    } else {
      params.delete("filter");
    }
    router.push(`?${params.toString()}`);
  }, [value]); // run on every keystroke

  function handleSetParams(param, val) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, val);
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="h-[10vh] xl:h-[8vh] mb-[1vh] p-2 relative m-auto mt-[12vh] xl:mt-[9vh] max-w-[1400px] xl:rounded-[1rem] rounded-none flex-col xl:flex-row bg-primary-400 flex justify-between items-center gap-2">
      <div className="xl:w-[25%] w-full relative">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="xl:p-2 px-2 text-[0.8rem] xl:text-[1rem] rounded-full font-thin text-xl text-primary-950 border-none outline-none w-full m-auto"
        />

        <CiSearch className="text-[1rem] xl:text-[1.5rem] absolute xl:right-2 right-1 xl:top-[10px] top-[6px] text-primary-400 rounded-full text-2xl" />
      </div>
      <div className="flex xl:gap-2 gap-1 overflow-y-auto">
        <FilterButton
          isActive={activeSort === "roasteryName-asc"}
          onClick={() => handleSetParams("sort", "roasteryName-asc")}
        >
          <FaBuilding />

          <AiOutlineSortAscending />
        </FilterButton>
        <FilterButton
          isActive={activeSort === "roasteryName-desc"}
          onClick={() => handleSetParams("sort", "roasteryName-desc")}
        >
          <FaBuilding />

          <AiOutlineSortDescending />
        </FilterButton>
        <FilterButton
          isActive={activeSort === "coffeeName-asc"}
          onClick={() => handleSetParams("sort", "coffeeName-asc")}
        >
          <PiCoffeeBeanFill />

          <AiOutlineSortAscending />
        </FilterButton>
        <FilterButton
          isActive={activeSort === "coffeeName-desc"}
          onClick={() => handleSetParams("sort", "coffeeName-desc")}
        >
          <PiCoffeeBeanFill />

          <AiOutlineSortDescending />
        </FilterButton>
        {user && (
          <>
            <FilterButton
              isActive={activeSort === "rating-asc"}
              onClick={() => handleSetParams("sort", "rating-asc")}
            >
              <MdFavorite />

              <GrAscend />
            </FilterButton>
            <FilterButton
              isActive={activeSort === "rating-desc"}
              onClick={() => handleSetParams("sort", "rating-desc")}
            >
              <MdFavorite />

              <GrDescend />
            </FilterButton>
          </>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
