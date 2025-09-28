export const metadata = {
  title: "Coffee",
};

import { AddCoffeeButton } from "../_components/Buttons";
import MyAllCoffeesList from "../_components/MyAllCoffeesList";
import Searchbar from "../_components/Searchbar";

export async function Page() {

  return (
    <div className="relative">
      <Searchbar user={false}/>

      <AddCoffeeButton />

      <MyAllCoffeesList />
    </div>
  );
}

export default Page;
