export const metadata = {
  title: "Coffee details | My Coffee",
};

import LoadingCoffees from "@/app/_components/_spinners/LoadingCoffees";
import CoffeeDetailsLogedOut from "@/app/_components/coffee-details/CoffeeDetailsLogedOut";
import { getCoffeeLoggedOut } from "@/app/_lib/data-service";
import { Suspense } from "react";

export const revalidate = 60;

async function Page({ params }) {
  const coffee = await getCoffeeLoggedOut(params.coffeeId);
  const grinders = [];

  return (
    <Suspense fallback={<LoadingCoffees />}>
      <CoffeeDetailsLogedOut coffee={coffee} grinders={grinders} />;
    </Suspense>
  );
}

export default Page;
