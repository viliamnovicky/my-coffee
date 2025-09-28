export const metadata = {
  title: "My Coffee",
};

import { AddCoffeeButton } from "../_components/Buttons";
import MyCoffeesList from "../_components/MyCoffeesList";
import Searchbar from "../_components/Searchbar";
import { auth } from "../_lib/auth";

export async function Page() {
  const session = await auth();
  const user = session?.user?.email ? session?.user?.email : false;

  return (
    <div className="relative">
      
      <Searchbar user={user}/>
      
        <AddCoffeeButton />
      

      <MyCoffeesList user={user}/>
    </div>
  );
}

export default Page;
