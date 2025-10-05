export const metadata = {
  title: "My Coffee",
};

import { Suspense } from "react";
import { AddCoffeeButton } from "../_components/Buttons";
import MyCoffeesList from "../_components/MyCoffeesList";
import Searchbar from "../_components/Searchbar";
import { auth } from "../_lib/auth";
import LoadingCoffees from "../_components/_spinners/LoadingCoffees";

export async function Page() {
  const session = await auth();
  const user = session?.user?.email ? session?.user?.email : false;

  return (
    <div className="relative">
      
      <Searchbar user={user}/>
      
        <AddCoffeeButton />
      <Suspense fallback={<LoadingCoffees/>}>

      <MyCoffeesList user={user}/>
      </Suspense>

    </div>
  );
}

export default Page;
