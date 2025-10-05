export const metadata = {
  title: "Coffee details | My Coffee",
};

import CoffeeDetails from "@/app/_components/coffee-details/CoffeeDetails";
import { getCoffee, getUser } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";
import LoadingCoffees from "@/app/_components/_spinners/LoadingCoffees";
import { Suspense } from "react";

export const revalidate = 60;

async function Page({ params }) {
  const session = await auth();
  const user = session?.user?.userId;

  const coffee = await getCoffee(params.coffeeId, user);
  const userData = await getUser(user);
  const grinders = userData?.grinders;

  return (
    <Suspense fallback={<LoadingCoffees />}>
      <CoffeeDetails coffee={coffee} grinders={grinders} />;
    </Suspense>
  );
}

export default Page;
