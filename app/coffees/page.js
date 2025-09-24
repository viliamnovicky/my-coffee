export const metadata = {
  title: "Coffee",
};

import { AddCoffeeButton } from "../_components/Buttons";
import { H2 } from "../_components/Headings";
import MyCoffeesList from "../_components/MyCoffeesList";
import Searchbar from "../_components/Searchbar";
import { auth } from "../_lib/auth";

export async function Page() {
  const session = await auth();
  const user = session.user.email;

  return (
    <div className="relative">
      
      <Searchbar/>
      
        <AddCoffeeButton />
      

      <MyCoffeesList user={user}/>
    </div>
  );
}

export default Page;
