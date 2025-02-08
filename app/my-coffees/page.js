import { Suspense } from "react";
import MyCoffeesList from "../_components/MyCoffeesList";
import Searchbar from "../_components/Searchbar";

function Page() {
  return (
    <div>
      <div className="w-full m-auto flex items-center justify-center p-4 bg-primary-200">
        <Searchbar />
      </div>

      <MyCoffeesList />
    </div>
  );
}

export default Page;
