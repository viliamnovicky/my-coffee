
import { Suspense } from "react";
import MyCoffeesList from "../_components/MyCoffeesList";
import Searchbar from "../_components/Searchbar";
import { AddCoffeeButton } from "../_components/Buttons";

function Page() {
  
  return (
    <div>
      <div className="w-full relative m-auto flex items-center justify-center p-4 bg-primary-200">
        <Searchbar />
        <AddCoffeeButton />
      </div>

      <Suspense fallback={<p className="p-4">Loading coffees...</p>}>
        <MyCoffeesList />
      </Suspense>
    </div>
  );
}

export default Page;


