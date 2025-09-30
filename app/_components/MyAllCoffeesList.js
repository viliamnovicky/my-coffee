import { getAllCoffees } from "../_lib/data-service";

import MyAllSortedCoffeesList from "../_components/MyAllSortedCoffeesList";

export default async function MyAllCoffeesList() {
  const coffees = await getAllCoffees();

  return (
    <div>
      <MyAllSortedCoffeesList list={coffees} />
    </div>
  );
}
