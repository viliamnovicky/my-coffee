export const metadata = {
  title: "Coffee",
};

import { Suspense } from "react";
import { AddCoffeeButton } from "../_components/Buttons";
import MyAllCoffeesList from "../_components/MyAllCoffeesList";
import Searchbar from "../_components/Searchbar";
import LoadingCoffees from "../_components/_spinners/LoadingCoffees";

export async function Page() {
  return (
    <div className="relative">
      <Suspense>
        <Searchbar user={false} />
      </Suspense>

      <AddCoffeeButton />
      <Suspense fallback={<LoadingCoffees/>}>
        <MyAllCoffeesList/>
      </Suspense>
    </div>
  );
}

export default Page;
