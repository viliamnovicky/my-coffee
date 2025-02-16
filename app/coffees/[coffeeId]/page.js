import CoffeeDetails from "@/app/_components/CoffeeDetails";
import { getCoffee } from "@/app/_lib/data-service";

export const revalidate = 60;

async function Page({ params }) {
  const coffee = await getCoffee(params.coffeeId);
  return <CoffeeDetails coffee={coffee} />;
}

export default Page;
