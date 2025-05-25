export const metadata = {
  title: "Coffee details | My Coffee",
};

import CoffeeDetails from "@/app/_components/coffee-details/CoffeeDetails";
import { getCoffee } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";

export const revalidate = 60;

async function Page({ params }) {
  const session = await auth()
  const user = session?.user?.userId
  const coffee = await getCoffee(params.coffeeId, user);
  return <CoffeeDetails coffee={coffee} />;
}

export default Page;
