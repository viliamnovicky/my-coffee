import { getAllCoffees } from "../_lib/data-service";

import MyAllSortedCoffeesList from "../_components/MyAllSortedCoffeesList";

export default async function MyAllCoffeesList() {
  const coffees = await getAllCoffees();

  return (
    <div className="min-h-screen overflow-hidden">
      <MyAllSortedCoffeesList list={coffees} />
    </div>
  );
}
