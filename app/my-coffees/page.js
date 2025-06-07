
import { Suspense } from "react";
import MyCoffeesList from "../_components/MyCoffeesList";
import Searchbar from "../_components/Searchbar";
import { AddCoffeeButton } from "../_components/Buttons";
import { auth } from "../_lib/auth";
import {H2} from "../_components/Headings"
import { getUser } from "../_lib/data-service";

async function Page() {
  const session = await auth()
  const user = session?.user?.email
  const userData = await getUser(user)
  console.log(session);
  console.log(userData)
  return (
    <div>
      <div className="w-full relative m-auto flex items-center justify-center p-4 bg-primary-200">
        <Searchbar />
        <AddCoffeeButton />
      </div>

      <Suspense fallback={<p className="p-4">Loading coffees...</p>}>
        <H2 className="xl:mt-[1rem] mt-[5rem] uppercase">Coffee I tasted</H2>
        <MyCoffeesList user={user}/>
      </Suspense>
    </div>
  );
}

export default Page;


