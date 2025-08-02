export const metadata = {
  title: "Coffee | My Coffee",
};

import { AddCoffeeButton } from "../_components/Buttons";
import { H2 } from "../_components/Headings";
import MyCoffeesList from "../_components/MyCoffeesList";
import Searchbar from "../_components/Searchbar";
import { auth } from "../_lib/auth";
import { getUser } from "../_lib/data-service";

export async function Page() {
  const session = await auth();
  const user = session.user.email;

  return (
    <div className="relative">
      <H2 className=" !fixed xl:top-[75px] rounded-none top-[135px] z-10 bg-primary-50 left-[50%] translate-x-[-50%] uppercase p-[1rem] w-full">Coffee I tasted</H2>
      <div className="w-full relative m-auto mt-[165px] xl:mt-[100px] flex items-center justify-center p-4">
        {/* <Searchbar /> */}
        <AddCoffeeButton />
      </div>

      <MyCoffeesList user={user} />
    </div>
  );
}

export default Page;
