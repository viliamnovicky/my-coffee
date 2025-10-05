import { getCoffees } from "../_lib/data-service";

import MySortedCoffeesList from "./MySortedCoffeesList";
import { Button } from "./Buttons";
import { MdOutlineFirstPage } from "react-icons/md";
import { MdOutlineLastPage } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export default async function MyCoffeesList({ user }) {
  const coffees = await getCoffees({ user });

  return <MySortedCoffeesList list={coffees} user={user} />;
}
