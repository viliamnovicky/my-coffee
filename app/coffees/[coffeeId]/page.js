export const metadata = {
  title: "Coffee details | My Coffee",
};

import CoffeeDetailsLogedOut from "@/app/_components/coffee-details/CoffeeDetailsLogedOut";
import { getCoffeeLoggedOut } from "@/app/_lib/data-service";

export const revalidate = 60;

async function Page({ params }) {
  const coffee = await getCoffeeLoggedOut(params.coffeeId);
  const grinders = [];
  
  return <CoffeeDetailsLogedOut coffee={coffee} grinders={grinders}/>;
}

export default Page;
