export const metadata = {
  title: "Coffee | My Coffee",
};

import { AddCoffeeButton } from "../_components/Buttons";
import MyCoffeesList from "../_components/MyCoffeesList";
import Searchbar from "../_components/Searchbar";
import { auth } from "../_lib/auth";
import { getUser } from "../_lib/data-service";

export async function Page() {
  const session = await auth();
  const user = session.user.email;

  return (
    <div>
      <div className="w-full relative m-auto mt-[105px] xl:mt-[50px] flex items-center justify-center p-4 bg-primary-200">
        {/* <Searchbar /> */}
        <AddCoffeeButton />
      </div>

      <MyCoffeesList user={user} />
    </div>
  );
}

export default Page;
