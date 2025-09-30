export const metadata = {
  title: "Coffee details | My Coffee",
};

import CoffeeDetails from "@/app/_components/coffee-details/CoffeeDetails";
import { getCoffee, getUser } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";

export const revalidate = 60;

async function Page({ params }) {
  const session = await auth()
  const user = session?.user?.userId
  
  const coffee = await getCoffee(params.coffeeId, user);
  const userData = await getUser(user);
  const grinders = userData?.grinders;
  
  return <CoffeeDetails coffee={coffee} grinders={grinders}/>;
}

export default Page;
