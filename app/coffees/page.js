export const metadata = {
  title: "Coffee",
};

import { Suspense } from "react";
import { AddCoffeeButton } from "../_components/Buttons";
import MyAllCoffeesList from "../_components/MyAllCoffeesList";
import Searchbar from "../_components/Searchbar";
import LoadingCoffees from "../_components/_spinners/LoadingCoffees";
import { getUser } from "../_lib/data-service";
import { auth } from "../_lib/auth";

export async function Page() {
  const session = await auth();
  const user = await getUser(session.user.email);
  return (
    <div className="relative">
      <Suspense>
        <Searchbar user={false} />
      </Suspense>

      {user.userType === "admin" && <AddCoffeeButton href="/new-coffee"/>}
      <Suspense fallback={<LoadingCoffees />}>
        <MyAllCoffeesList />
      </Suspense>
    </div>
  );
}

export default Page;
