export const metadata = {
  title: "Coffee | My Coffee",
};

import { AddCoffeeButton } from "../_components/Buttons";
import CoffeesList from "../_components/CoffeesList";
import Searchbar from "../_components/Searchbar";
function Page() {
  return (
    <div>
      <div className="w-full relative m-auto flex items-center justify-center p-4 bg-primary-200">
        <Searchbar />
        <AddCoffeeButton />
      </div>

      <CoffeesList />
    </div>
  );
}

export default Page;
