import { Suspense } from "react";
import GearContainer from "../_components/account/GearContainer";
import Avatar from "../_components/Avatar";
import { Button } from "../_components/Buttons";
import { H2 } from "../_components/Headings";
import { auth } from "../_lib/auth";
import { getUser } from "../_lib/data-service";
import LoadingCoffees from "../_components/_spinners/LoadingCoffees";
import NewBrewerForm from "../_components/account/NewBrewerForm";

export const metadata = {
  title: "Profile",
};

export default async function page() {
  const session = await auth();
  const user = await getUser(session.user.email);

  return (
    <div className="mt-[5.2rem] m-auto w-full py-2">
      <Suspense fallback={<LoadingCoffees />}>
        <Avatar src={user.image} />
        <H2 className="text-[1.3rem] xl:text-[2rem] pl-[1rem] mt-[2rem] w-full xl:w-[1300px] m-auto text-start">
          Brewers
        </H2>
        <div className="flex flex-col w-full xl:w-[1300px] gap-[1rem] m-auto">
          {user?.coffeeMakers?.map((maker) => (
            <GearContainer key={maker.mark + maker.model + "container"} gear={maker} />
          ))}
        </div>
        <NewBrewerForm />
        <H2 className="text-[1.3rem] xl:text-[2rem] pl-[1rem] mt-[2rem] w-full xl:w-[1300px] m-auto text-start">
          Grinders
        </H2>
        <div className="flex flex-col w-full xl:w-[1300px] gap-[1rem] m-auto">
          {user?.grinders?.map((grinder) => (
            <GearContainer key={grinder.mark + grinder.model + "container"} gear={grinder} />
          ))}
        </div>
        <Button className=" m-auto mt-[1rem] block">Add Grinder</Button>
        <div className="grid grid-cols-2 w-full xl:w-[1300px] m-auto">
          <H2 className="text-[1.3rem] xl:text-[2rem] mt-[2rem] m-auto ">Favourite cup</H2>
          <H2 className="text-[1.3rem] xl:text-[2rem] mt-[2rem] m-auto ">Favourite drink</H2>
        </div>
      </Suspense>
    </div>
  );
}
