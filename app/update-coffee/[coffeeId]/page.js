import { getCoffee, getUser } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";
import NewCoffeeForm from "@/app/_components/NewCoffeeForm";
import { NewCoffeeProvider } from "@/app/_context/NewCoffeeContext";

export const revalidate = 60;

async function page({ params }) {
  const session = await auth();
  const user = session?.user?.userId;
  const userData = await getUser(user);

  const coffee = await getCoffee(params.coffeeId, user);

  return (
    <NewCoffeeProvider initialCoffee={coffee}>
      <NewCoffeeForm coffee={coffee} user={userData} update={true}/>
    </NewCoffeeProvider>
  );
}

export default page;
