
import { Suspense } from "react";
import MyCoffeesList from "../_components/MyCoffeesList";
import Searchbar from "../_components/Searchbar";
import { AddCoffeeButton } from "../_components/Buttons";
import { auth } from "../_lib/auth";
import {H2} from "../_components/Headings"

async function Page() {
  const session = await auth()
  const user = session?.user?.email
  console.log("SESSION:", session);
  return (
    <div>
      <div className="w-full relative m-auto flex items-center justify-center p-4 bg-primary-200">
        <Searchbar />
        <AddCoffeeButton />
      </div>

      <Suspense fallback={<p className="p-4">Loading coffees...</p>}>
        <H2 className="mt-[1rem] uppercase">Coffee I tasted</H2>
        <MyCoffeesList user={user}/>
      </Suspense>
    </div>
  );
}

export default Page;


